import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';

@Component({
  selector: 'app-favorites',
  imports: [TuiTitle],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent {}
