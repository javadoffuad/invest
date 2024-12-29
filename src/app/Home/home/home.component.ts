import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton, TuiTitle } from '@taiga-ui/core';

@Component({
  selector: 'app-home',
  imports: [TuiTitle, TuiButton],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
