import { Component } from '@angular/core';
import { TuiButton, TuiTitle } from '@taiga-ui/core';

@Component({
  selector: 'app-home',
  imports: [TuiTitle, TuiButton],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent {}
