import { Component, OnInit, effect } from '@angular/core';
import { ProductModel } from '../../core/models/product.model';
import { ProductService } from './services/products.services';
import { PanelModule } from 'primeng/panel';
import { ProductItem } from './product-item/product-item';
import { PaginatorModule } from 'primeng/paginator';
import { LoaderService } from '../../core/services/loader/loader.service';
import { searchSignal } from '../../core/signals/search-signal';
import { CategorySignal } from '../../core/signals/category-signal';
import { InputNumberModule } from 'primeng/inputnumber';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [PanelModule, ProductItem, PaginatorModule, InputNumberModule,Button],
  templateUrl: './products.html',
  styleUrls: ['./products.scss'],
})
export class Products implements OnInit {

  protected products: ProductModel[] = [];
  protected totalElements: number = 0;
  protected page: number = 0;
  protected size: number = 10;

  constructor(
    private productService: ProductService,
    private loaderService: LoaderService
  ) {
    effect(() => {
      if(searchSignal()!=''){
        this.initProducts();
      }
      if(CategorySignal() != 0){
        this.initProducts();
      }
    });
  }

  ngOnInit(): void {
    this.initProducts();
  }

  initProducts() {
    this.loaderService.show();
    const subCategoryId = CategorySignal();
    const query = searchSignal();
    const params:any = {
      page: this.page, 
      size: this.size,
    }
    if(subCategoryId!=0)params.subCategoryId = subCategoryId;
    if(query != '') params.q = query;
    this.productService.getProducts(params).subscribe({
      next: resp => {
        this.products = resp.data.content;
        this.totalElements = resp.data.totalElements;
        searchSignal.set('');
        CategorySignal.set(0);
        this.loaderService.hide();
      },
      error: () => this.loaderService.hide()
    });
  }

  onPageChange(event: any) {
    this.page = event.page;
    this.initProducts();
  }
}
