import { Component } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { Categories } from '../../../features/categories/categories';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-menu',
  imports: [DrawerModule,Categories,ButtonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {

  visible: boolean = false;

}
