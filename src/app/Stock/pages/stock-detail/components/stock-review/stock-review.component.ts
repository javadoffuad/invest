import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-stock-review',
  standalone: true,
  imports: [],
  templateUrl: './stock-review.component.html',
  styleUrl: './stock-review.component.less',
})
export class StockReviewComponent {
  brandName = signal('ГК Самолет');
}
