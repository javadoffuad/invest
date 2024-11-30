import { Component, inject, signal, Signal } from '@angular/core';
import { IStock } from '../../../../models/stock.models';
import { ROUTER_OUTLET_DATA } from '@angular/router';
import { CompaniesService } from '../../../../services/companies/companies.service';
import { ICompany } from '../../../../models/company.models';

@Component({
  selector: 'app-stock-review',
  imports: [],
  templateUrl: './stock-review.component.html',
  styleUrl: './stock-review.component.less',
})
export class StockReviewComponent {
  protected stock$ = inject<Signal<IStock>>(ROUTER_OUTLET_DATA);
  protected company$ = signal<ICompany | null>(null);
  protected country = '';

  constructor(private companies: CompaniesService) {
    const stock = this.stock$();

    if (stock) {
      const company = this.companies.getItemById(stock.id);
      this.company$.set(company);
    }
  }
}
