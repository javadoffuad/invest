import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-currency-news',
  imports: [],
  templateUrl: './currency-news.component.html',
  styleUrl: './currency-news.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyNewsComponent {}
