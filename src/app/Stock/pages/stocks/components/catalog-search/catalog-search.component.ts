import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiTab, TuiTabsHorizontal } from '@taiga-ui/kit';

@Component({
  selector: 'app-catalog-search',
  imports: [RouterLink, TuiTab, TuiTabsHorizontal],
  templateUrl: './catalog-search.component.html',
  styleUrl: './catalog-search.component.less',
})
export class CatalogSearchComponent {
  protected activeItemIndex = 0;

  onClick(name: string) {
    console.log(name);
  }
}
