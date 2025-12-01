import { ProductModel } from "./product.model";

export interface CartItemModel{
    cartItemId?:number;
    cartId?:number;
    product?:ProductModel;
    quantity?:number;
}