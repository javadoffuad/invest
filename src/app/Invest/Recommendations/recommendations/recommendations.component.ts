import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';

@Component({
  selector: 'app-recommendations',
  imports: [TuiTitle],
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendationsComponent {}
