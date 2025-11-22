import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../core/models/product.model';
import { ProductService } from './services/products.services';
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-products',
  imports: [PanelModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit{

  protected products:ProductModel[]=[];
  protected totalElements:number=0;
  protected page:number=0;
  protected size:number=10

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.initProducts();
  }

  initProducts(){
    this.productService.getProducts().subscribe({
      next:(resp)=>{
        this.products=resp.data.content
        this.totalElements=resp.data.totalElements;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
