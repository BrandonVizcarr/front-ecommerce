import { CartItemModel } from "./cart-item";

export interface CartModel{
    cartId?:number;
    userId?:string;
    cartItem?:CartItemModel[];
}