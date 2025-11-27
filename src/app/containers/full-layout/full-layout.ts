import { Component, computed, signal } from '@angular/core';
import { Header } from './header/header';
import { Menu } from './menu/menu';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from '../../core/services/loader/loader.component';

@Component({
  selector: 'app-full-layout',
  imports: [Header,Menu,RouterOutlet,LoaderComponent],
  templateUrl: './full-layout.html',
  styleUrl: './full-layout.scss',
})
export class FullLayout {

  menuOpen = signal(true);
  searchQuery = signal<string>('');
  normalizedQuery = computed(() => this.searchQuery().trim().toLowerCase());

  updateSearch(value: string) {
    this.searchQuery.set(value);
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }
}
