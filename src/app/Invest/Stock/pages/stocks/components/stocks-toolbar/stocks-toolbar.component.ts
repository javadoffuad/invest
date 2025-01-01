import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TuiSelectModule, TuiTextfieldControllerModule } from '@taiga-ui/legacy';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ISector } from '../../../../../models/stock.models';
import { ICountry } from '../../../../../models/country.models';

@Component({
  selector: 'app-stocks-toolbar',
  imports: [TuiSelectModule, ReactiveFormsModule, TuiTextfieldControllerModule],
  templateUrl: './stocks-toolbar.component.html',
  styleUrl: './stocks-toolbar.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StocksToolbarComponent {
  countries = input.required<ICountry[]>();
  currencies = input.required<string[]>();
  sectors = input.required<ISector[]>();

  protected controlCurrency = new FormControl<string | null>(null);
  protected controlCountry = new FormControl<ICountry | null>(null);
  protected controlSector = new FormControl<string | null>(null);

  protected namedStringify = (item: { name: string }) => item.name;
}
