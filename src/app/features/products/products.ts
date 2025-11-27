import { Component, OnInit, effect, inject } from '@angular/core';
import { ProductModel } from '../../core/models/product.model';
import { ProductService } from './services/products.services';
import { PanelModule } from 'primeng/panel';
import { ProductItem } from './product-item/product-item';
import { PaginatorModule } from 'primeng/paginator';
import { LoaderService } from '../../core/services/loader/loader.service';
import { searchSignal } from '../../containers/full-layout/header/search-signal';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [PanelModule, ProductItem, PaginatorModule],
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
      const query = searchSignal();
      if (query === '') {
        this.initProducts();
      } else {
        this.searchProducts(query);
      }
    });
  }

  ngOnInit(): void {
    this.initProducts();
  }

  initProducts() {
    this.loaderService.show();
    this.productService.getProducts({ page: this.page, size: this.size }).subscribe({
      next: resp => {
        this.products = resp.data.content;
        this.totalElements = resp.data.totalElements;
        this.loaderService.hide();
      },
      error: () => this.loaderService.hide()
    });
  }

  searchProducts(query: string) {
    this.loaderService.show();
    this.productService.getProducts({ q: query, page: 0, size: this.size }).subscribe({
      next: resp => {
        this.products = resp.data.content;
        this.totalElements = resp.data.totalElements;
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
