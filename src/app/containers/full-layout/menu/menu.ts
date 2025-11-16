import { Component } from '@angular/core';
import { Categories } from '../../../features/categories/categories';
@Component({
  selector: 'app-menu',
  imports: [Categories],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
}
