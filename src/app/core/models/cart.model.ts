import { CartItemModel } from "./cart-item.model";

export interface CartModel{
    cartId?:number;
    userId?:string;
    cartItems?:CartItemModel[];
}