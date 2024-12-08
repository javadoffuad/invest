import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { TuiInputModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';

@Component({
  selector: 'app-invest-home',
  imports: [
    RouterOutlet,
    NavigationBarComponent,
    TuiInputModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
  ],
  templateUrl: './invest-home.component.html',
  styleUrl: './invest-home.component.less',
})
export class InvestHomeComponent {
  protected control = new FormControl<string>('');
}
