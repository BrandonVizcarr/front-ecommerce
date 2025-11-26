import { Component, inject } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  template: `
    @if(loader.isLoading()){
        <div class="loader-backdrop">
            <div class="loader"></div>
        </div>
    }
  `,
  styles: [`
    .loader-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
    .loader {
      width: 50px;
      height: 50px;
      border: 6px solid #ddd;
      border-top-color: #3f51b5;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `]
})
export class LoaderComponent {
  loader = inject(LoaderService);
}
