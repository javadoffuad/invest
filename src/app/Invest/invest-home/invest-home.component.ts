import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CatalogSearchComponent } from '../components/catalog-search/catalog-search.component';

@Component({
  selector: 'app-invest-home',
  imports: [RouterOutlet, CatalogSearchComponent],
  templateUrl: './invest-home.component.html',
  styleUrl: './invest-home.component.less',
})
export class InvestHomeComponent {}
