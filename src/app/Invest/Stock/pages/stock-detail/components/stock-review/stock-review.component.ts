import { Component, inject, signal, Signal } from '@angular/core';
import { IStock } from '../../../../../models/stock.models';
import { ROUTER_OUTLET_DATA } from '@angular/router';
import { CompaniesService } from '../../../../../services/companies/companies.service';
import { ICompany } from '../../../../../models/company.models';
import { TuiTitle } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';

@Component({
  selector: 'app-currency-review',
  imports: [TuiTitle, TuiAvatar],
  templateUrl: './stock-review.component.html',
  styleUrl: './stock-review.component.less',
})
export class StockReviewComponent {
  protected stock$ = inject<Signal<IStock>>(ROUTER_OUTLET_DATA);
  protected company$ = signal<ICompany | null>(null);

  constructor(private companies: CompaniesService) {
    const stock = this.stock$();

    if (stock) {
      const company = this.companies.getItemById(stock.id);
      this.company$.set(company);
    }
  }
}
