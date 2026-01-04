import { Component, computed, effect, EventEmitter, Output, output, signal } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { searchSignal } from '../../../core/signals/search-signal';
import { FormsModule } from '@angular/forms';
import { CartSignal } from '../../../core/signals/cart-signal';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
  selector: 'app-header',
  imports: [PanelModule,InputTextModule,ButtonModule,InputGroupModule,FormsModule,BadgeModule,OverlayBadgeModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})

export class Header {

  toggleMenu = output<void>();
  searchText = '';
  cartCount = computed(() =>
    CartSignal().cartItems?.reduce((acc, item) => acc + (item.quantity ?? 0), 0) || 0
  );

  search() {
    searchSignal.set(this.searchText.trim());
  }

}
