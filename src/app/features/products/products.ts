import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../core/models/product.model';
import { ProductService } from './services/products.services';
import { PanelModule } from 'primeng/panel';
import { ProductItem } from './product-item/product-item';
import { PaginatorModule } from 'primeng/paginator';
import { LoaderService } from '../../core/services/loader/loader.service';
@Component({
  selector: 'app-products',
  imports: [PanelModule,ProductItem,PaginatorModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit{

  protected products:ProductModel[]=[];
  protected totalElements:number=0;
  protected page:number=0;
  protected size:number=10

  constructor(private productService: ProductService,private loaderService:LoaderService){}

  ngOnInit(): void {
    this.initProducts();
  }

  initProducts(){
    this.loaderService.show();
    this.productService.getProducts().subscribe({
      next:(resp)=>{
        this.products=resp.data.content
        this.totalElements=resp.data.totalElements;
        this.loaderService.hide();
      },
      error:(err)=>{
        console.log(err);
        this.loaderService.hide();
      }
    })
  }
  onPageChange(event:any){
    this.initProducts();
  }

}
