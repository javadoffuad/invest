import { Component, input } from '@angular/core';
import { TuiSelectModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ISector } from '../../../../../models/stock.models';

@Component({
  selector: 'app-stocks-toolbar',
  imports: [TuiSelectModule, ReactiveFormsModule, TuiTextfieldControllerModule],
  templateUrl: './stocks-toolbar.component.html',
  styleUrl: './stocks-toolbar.component.less',
})
export class StocksToolbarComponent {
  countries = input.required<string[]>();
  currencies = input.required<string[]>();
  sectors = input.required<ISector[]>();

  protected controlCurrency = new FormControl<string | null>(null);
  protected controlCountry = new FormControl<string | null>(null);
  protected controlSector = new FormControl<string | null>(null);

  protected namedStringify = (item: { name: string }) => item.name;
}
