import { signal } from '@angular/core';
import { CartModel } from '../models/cart.model';

const STORAGE_KEY = 'cart';

function loadCart(): CartModel {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : { cartItems: [] };
  } catch {
    return { cartItems: [] };
  }
}

export const CartSignal = signal<CartModel>(loadCart());
