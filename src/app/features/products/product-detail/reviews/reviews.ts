import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../../services/products.services';
import { ReviewModel } from '../../../../core/models/review.model';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-reviews',
  imports: [CardModule],
  templateUrl: './reviews.html',
  styleUrl: './reviews.scss',
})
export class Reviews implements OnInit {

  @Input() productId?: any;
  reviews: ReviewModel[] = [];
  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews() {
    this.productService.getReviews(this.productId!!).subscribe({
      next: (resp) => {
        this.reviews = resp.data.content;
      }
    });
  }

}
