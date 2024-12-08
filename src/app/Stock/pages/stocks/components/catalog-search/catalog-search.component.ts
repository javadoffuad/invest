import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TuiButton } from '@taiga-ui/core';

@Component({
  selector: 'app-catalog-search',
  imports: [RouterLink, TuiButton],
  templateUrl: './catalog-search.component.html',
  styleUrl: './catalog-search.component.less',
})
export class CatalogSearchComponent {
  protected activeItemIndex = 0;

  onClick(name: string) {
    console.log(name);
  }
}
