import { Injectable } from '@angular/core';
import {IStock} from '../models/stock.models';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  private stocks: IStock[] = [
    {
      id: 1,
      name: 'Норильский никель',
      shortName: 'GMKN',
      price: '100,8',
      sectorId: 1,
    },
    {
      id: 2,
      name: 'Мечел',
      shortName: 'MTLR',
      price: '103,96',
      sectorId: 1,
    },
    {
      id: 3,
      name: 'НЛМК',
      shortName: 'NLMK',
      price: '121,8',
      sectorId: 1,
    },
    {
      id: 3,
      name: 'Аэрофлот',
      shortName: 'AFLT',
      price: '55,99',
      sectorId: 2,
    },
    {
      id: 4,
      name: 'ГК Самолет',
      shortName: 'SMLT',
      price: '1438',
      sectorId: 3,
    },
    {
      id: 5,
      name: 'Хэдхантер',
      shortName: 'HEAD',
      price: '4245',
      sectorId: 4,
    },
    {
      id: 6,
      name: 'Магнит',
      shortName: 'MGNT',
      price: '4520',
      sectorId: 2,
    },
    {
      id: 7,
      name: 'Московская Биржа',
      shortName: 'MOEX',
      price: '189,32',
      sectorId: 5,
    },
    {
      id: 8,
      name: 'Сургутнефтегаз',
      shortName: 'SNGS',
      price: '23,715',
      sectorId: 5,
    },
    {
      id: 9,
      name: 'ММК',
      shortName: 'MAGN',
      price: '35,855',
      sectorId: 1,
    },
  ];

  constructor() { }

  public getStocks() {
    return this.stocks;
  }

  public getStock(stockShortName: IStock['shortName']): IStock | null {
    return this.stocks.find(stock => stock.shortName === stockShortName) || null;
  }
}
