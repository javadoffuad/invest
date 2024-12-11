import { Component, input } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiAxes, TuiLineChart } from '@taiga-ui/addon-charts';
import { TuiCurrencyPipe } from '@taiga-ui/addon-commerce';
import { TuiFormatNumberPipe, TuiIconPipe, TuiPoint, TuiTitle } from '@taiga-ui/core';
import {
  TuiTableCell,
  TuiTableDirective,
  TuiTableTbody,
  TuiTableTd,
  TuiTableTh,
  TuiTableThGroup,
  TuiTableTr,
} from '@taiga-ui/addon-table';
import { IStock } from '../../models/stock.models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-stocks-table',
  imports: [
    AsyncPipe,
    TuiAvatar,
    TuiAxes,
    TuiCurrencyPipe,
    TuiFormatNumberPipe,
    TuiIconPipe,
    TuiLineChart,
    TuiTableCell,
    TuiTableDirective,
    TuiTableTbody,
    TuiTableTd,
    TuiTableTh,
    TuiTableThGroup,
    TuiTableTr,
    TuiTitle,
    RouterLink,
  ],
  templateUrl: './stocks-table.component.html',
  styleUrl: './stocks-table.component.less',
})
export class StocksTableComponent {
  items$ = input.required<IStock[]>({ alias: 'items' });

  protected readonly displayedColumns: string[] = ['name', 'price', 'absolutePrice', 'chart'];
  protected readonly negativeChartValue: readonly TuiPoint[] = [
    [50, 50],
    [100, 75],
    [150, 50],
    [200, 150],
    [250, 155],
    [300, 190],
    [350, 90],
  ];
  protected readonly positiveChartValue: readonly TuiPoint[] = [
    [50, 50],
    [100, 75],
    [150, 50],
    [200, 150],
    [250, 155],
    [300, 190],
    [350, 90],
  ];
}
