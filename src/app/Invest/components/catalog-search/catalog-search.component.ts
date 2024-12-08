import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-catalog-search',
  imports: [RouterLink, TuiButton, RouterLinkActive],
  templateUrl: './catalog-search.component.html',
  styleUrl: './catalog-search.component.less',
})
export class CatalogSearchComponent {}
