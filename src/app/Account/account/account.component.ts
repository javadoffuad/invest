import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-account',
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent {}
