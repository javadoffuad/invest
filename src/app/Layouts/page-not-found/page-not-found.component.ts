import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  TuiBlockStatusComponent,
  TuiBlockStatusDirective,
} from '@taiga-ui/layout';

@Component({
    selector: 'app-page-not-found',
    imports: [TuiBlockStatusComponent, TuiBlockStatusDirective],
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent {}
