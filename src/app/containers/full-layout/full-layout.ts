import { Component } from '@angular/core';
import { Header } from './header/header';
import { Menu } from './menu/menu';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-full-layout',
  imports: [Header,Menu,RouterOutlet],
  templateUrl: './full-layout.html',
  styleUrl: './full-layout.scss',
})
export class FullLayout {

}
