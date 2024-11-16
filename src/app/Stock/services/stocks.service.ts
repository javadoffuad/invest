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
        value: 115.16,
      },
      earnings: {
        absolute: {
          value: 0,
          currency: 'RUB',
        },
        previousPrice: {
          value: 115.16,
          currency: 'RUB',
        },
        relative: 0,
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
      earnings: {
        absolute: {
          value: 0,
          currency: 'RUB',
        },
        previousPrice: {
          value: 103.96,
          currency: 'RUB',
        },
        relative: 0,
      },
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
      earnings: {
        absolute: {
          value: 0,
          currency: 'RUB',
        },
        previousPrice: {
          value: 121.8,
          currency: 'RUB',
        },
        relative: 0,
      },
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
      earnings: {
        absolute: {
          value: 0,
          currency: 'RUB',
        },
        previousPrice: {
          value: 1438,
          currency: 'RUB',
        },
        relative: 0,
      },
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
      earnings: {
        absolute: {
          value: 0,
          currency: 'RUB',
        },
        previousPrice: {
          value: 4245,
          currency: 'RUB',
        },
        relative: 0,
      },
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
      earnings: {
        absolute: {
          value: 0,
          currency: 'RUB',
        },
        previousPrice: {
          value: 4520,
          currency: 'RUB',
        },
        relative: 0,
      },
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
      earnings: {
        absolute: {
          value: 0,
          currency: 'RUB',
        },
        previousPrice: {
          value: 189.32,
          currency: 'RUB',
        },
        relative: 0,
      },
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
      earnings: {
        absolute: {
          value: 0,
          currency: 'RUB',
        },
        previousPrice: {
          value: 23.715,
          currency: 'RUB',
        },
        relative: 0,
      },
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
      earnings: {
        absolute: {
          value: 0,
          currency: 'RUB',
        },
        previousPrice: {
          value: 35.855,
          currency: 'RUB',
        },
        relative: 0,
      },
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
      earnings: {
        absolute: {
          value: 0,
          currency: 'RUB',
        },
        previousPrice: {
          value: 55.99,
          currency: 'RUB',
        },
        relative: 0,
      },
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
