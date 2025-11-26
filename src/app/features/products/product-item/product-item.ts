import { Component, input } from '@angular/core';
import { ProductModel } from '../../../core/models/product.model';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-product-item',
  imports: [RouterModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.scss',
})
export class ProductItem {

  public productItem = input.required<ProductModel>();

}
