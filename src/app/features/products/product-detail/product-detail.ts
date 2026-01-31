import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PanelModule } from 'primeng/panel';
import { ProductModel } from '../../../core/models/product.model';
import { ProductService } from '../services/products.services';
import { CardModule } from 'primeng/card';
import { Button } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CategorySignal } from '../../../core/signals/category-signal';
import { searchSignal } from '../../../core/signals/search-signal';
import { DialogService, DynamicDialogModule, DynamicDialogRef } from 'primeng/dynamicdialog';
import { BuyItem } from './buy-item/buy-item';
import { LoaderService } from '../../../core/services/loader/loader.service';
import { CartSignal } from '../../../core/signals/cart-signal';
import { Reviews } from './reviews/reviews';

@Component({
  selector: 'app-product-detail',
  imports: [PanelModule, CardModule, Button, CommonModule, FormsModule, DynamicDialogModule, Reviews],
  providers: [DialogService],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail implements OnInit {

  private route = inject(ActivatedRoute);
  protected product?: ProductModel;
  protected quantity: number = 1;
  protected productId = signal<string | null>(null);
  protected images: string[] = [];
  protected currentIndex = 0;
  protected quantities: number[] = [];
  private isFirstRun = true;
  ref!: DynamicDialogRef | null;
  public card = CartSignal();

  constructor(private productService: ProductService, private router: Router, private dynamicDialogService: DialogService, private loaderService: LoaderService) {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.productId.set(id);
    });
    effect(() => {
      const category = CategorySignal();
      const search = searchSignal();

      if (this.isFirstRun) {
        this.isFirstRun = false;
        return;
      }

      if (category || search) {
        this.router.navigate(['/products']);
      }
    });
  }

  ngOnInit(): void {
    this.initProduct();
  }

  initProduct() {
    this.loaderService.show();
    this.productService.getProductsById(this.productId()!!).subscribe({
      next: (resp) => {
        this.product = resp.data;
        this.images = resp.data.media || [];
        this.currentIndex = 0;
        const stock = this.product?.stock ?? 0;
        const max = Math.min(stock, 10);
        this.quantities = Array.from({ length: max }, (_, i) => i + 1);
        this.loaderService.hide();
      }
    });
  }

  selectImage(i: number) {
    this.currentIndex = i;
  }

  nextImage() {
    if (!this.images.length) return;
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }
  }

  prevImage() {
    if (!this.images.length) return;
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  buyItem() {
    this.ref = this.dynamicDialogService.open(
      BuyItem, {
      header: '😅 Upsss..',
      width: 'auto',
      height: 'auto',
      modal: true,
      closable: true
    }
    )
  }

  addToCard() {
    if (!this.product) return;

    const qtyToAdd = Number(this.quantity);
    const stock = Number(this.product.stock ?? 0);

    CartSignal.update(cart => {
      const items = cart.cartItems ?? [];

      const existingItem = items.find(
        i => i.product?.productId === this.product?.productId
      );

      const existingQty = Number(existingItem?.quantity) || 0;
      const finalQty = Math.min(existingQty + qtyToAdd, stock);

      const updatedItems = existingItem
        ? items.map(i =>
          i.product?.productId === this.product?.productId
            ? { ...i, quantity: finalQty }
            : i
        )
        : [
          ...items,
          {
            product: this.product,
            quantity: Math.min(qtyToAdd, stock)
          }
        ];

      const updatedCart = { ...cart, cartItems: updatedItems };

      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  }




}
