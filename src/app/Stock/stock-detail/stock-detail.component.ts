import {Component, signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-stock-detail',
  standalone: true,
  imports: [],
  templateUrl: './stock-detail.component.html',
  styleUrl: './stock-detail.component.less'
})
export class StockDetailComponent {
  protected stockShortName = signal<string>('');

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const stockShortName = this.route.snapshot.paramMap.get('name') ?? '';
    this.stockShortName.set(stockShortName);
    console.log('stock shortName', stockShortName);
  }
}
