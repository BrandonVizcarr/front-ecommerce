import { Component, computed, EventEmitter, Output, output, signal } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { searchSignal } from './search-signal';
import { FormsModule } from '@angular/forms';
import { CartSignal } from './cart-signal';

@Component({
  selector: 'app-header',
  imports: [PanelModule,InputTextModule,ButtonModule,InputGroupModule,FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})

export class Header {

  toggleMenu = output<void>();
  searchText = '';
  cartCount = computed(() =>
    CartSignal().cartItem?.reduce((acc, item) => acc + (item.quantity ?? 0), 0) || 0
  );


  search() {
    searchSignal.set(this.searchText.trim());
  }

}
