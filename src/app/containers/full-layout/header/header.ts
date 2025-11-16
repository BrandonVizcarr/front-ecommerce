import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';

@Component({
  selector: 'app-header',
  imports: [PanelModule,InputTextModule,ButtonModule,InputGroupModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})

export class Header {

}
