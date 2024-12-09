import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { TuiInputModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';

@Component({
  selector: 'app-page-wrapper',
  imports: [
    RouterOutlet,
    NavigationBarComponent,
    TuiInputModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
  ],
  templateUrl: './page-wrapper.component.html',
  styleUrl: './page-wrapper.component.less',
})
export class PageWrapperComponent {
  protected control = new FormControl<string>('');
}
