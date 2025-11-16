import { Component } from '@angular/core';
import { Header } from './header/header';
import { Menu } from './menu/menu';

@Component({
  selector: 'app-full-layout',
  imports: [Header,Menu],
  templateUrl: './full-layout.html',
  styleUrl: './full-layout.scss',
})
export class FullLayout {

}
