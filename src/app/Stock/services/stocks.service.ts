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
      price: {
        currency: 'RUB',
        value: 100.8,
      },
      earnings: {
        absolute: {
          value: null,
          currency: null,
        },
        previousPrice: {},
        relative:
      },
      lotSize: 1,
      sectorId: 1,
    },
    {
      id: 2,
      name: 'Мечел',
      shortName: 'MTLR',
      price: {
        currency: 'RUB',
        value: 103.96,
      },
      minPriceIncrement: 1.71,
      lotSize: 1,
      sectorId: 1,
    },
    {
      id: 3,
      name: 'НЛМК',
      shortName: 'NLMK',
      price: {
        currency: 'RUB',
        value: 121.8,
      },
      minPriceIncrement: 3.18,
      lotSize: 1,
      sectorId: 1,
    },
    {
      id: 4,
      name: 'ГК Самолет',
      shortName: 'SMLT',
      price: {
        currency: 'RUB',
        value: 1438,
      },
      minPriceIncrement: 22.5,
      lotSize: 10,
      sectorId: 3,
    },
    {
      id: 5,
      name: 'Хэдхантер',
      shortName: 'HEAD',
      price: {
        currency: 'USD',
        value: 4245,
      },
      minPriceIncrement: 31,
      lotSize: 1,
      sectorId: 4,
    },
    {
      id: 6,
      name: 'Магнит',
      shortName: 'MGNT',
      price: {
        currency: 'RUB',
        value: 4520,
      },
      minPriceIncrement: 30.5,
      lotSize: 1,
      sectorId: 2,
    },
    {
      id: 7,
      name: 'Московская Биржа',
      shortName: 'MOEX',
      price: {
        currency: 'RUB',
        value: 189.32,
      },
      minPriceIncrement: 2.16,
      lotSize: 1,
      sectorId: 5,
    },
    {
      id: 8,
      name: 'Сургутнефтегаз',
      shortName: 'SNGS',
      price: {
        currency: 'RUB',
        value: 23.715,
      },
      minPriceIncrement: 0.135,
      lotSize: 100,
      sectorId: 5,
    },
    {
      id: 9,
      name: 'ММК',
      shortName: 'MAGN',
      price: {
        currency: 'RUB',
        value: 35.855,
      },
      minPriceIncrement: 0.465,
      lotSize: 10,
      sectorId: 1,
    },
    {
      id: 10,
      name: 'Аэрофлот',
      shortName: 'AFLT',
      price: {
        currency: 'RUB',
        value: 55.99,
      },
      minPriceIncrement: 2.02,
      lotSize: 10,
      sectorId: 2,
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
