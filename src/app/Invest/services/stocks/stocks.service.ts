import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { IStock } from '../../models/stock.models';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  private stocks: IStock[] = [
    {
      id: 1,
      name: 'Норильский никель',
      ticker: 'GMKN',
      logoName: 'https://invest-brands.cdn-tinkoff.ru/nornikelx160.png',
      isin: 'RU0007288411',
      isFavorite: false,
      sector: 'Materials',
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
      lotSize: 10,
      sectorId: 1,
      exchangeName: 'Московская биржа',
      exchangeLogo: 'https://invest-brands.cdn-tinkoff.ru/exchanges/MosExchange.png',
      countryName: 'Россия',
      countryLogo: 'https://invest-brands.cdn-tinkoff.ru/countries/flags/RU.png',
    },
    {
      id: 2,
      name: 'Мечел',
      ticker: 'MTLR',
      logoName: 'https://invest-brands.cdn-tinkoff.ru/RU000A0DKXV5x160.png',
      isin: 'RU000A0DKXV5',
      isFavorite: false,
      sector: 'Materials',
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
      exchangeName: 'Московская биржа',
      exchangeLogo: 'https://invest-brands.cdn-tinkoff.ru/exchanges/MosExchange.png',
      countryName: 'Россия',
      countryLogo: 'https://invest-brands.cdn-tinkoff.ru/countries/flags/RU.png',
    },
    {
      id: 3,
      name: 'НЛМК',
      ticker: 'NLMK',
      logoName: 'https://invest-brands.cdn-tinkoff.ru/RU0009046452x160.png',
      isin: 'RU0009046452',
      isFavorite: true,
      sector: 'Materials',
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
      exchangeName: 'Московская биржа',
      exchangeLogo: 'https://invest-brands.cdn-tinkoff.ru/exchanges/MosExchange.png',
      countryName: 'Россия',
      countryLogo: 'https://invest-brands.cdn-tinkoff.ru/countries/flags/RU.png',
    },
    {
      id: 4,
      name: 'ГК Самолет',
      ticker: 'SMLT',
      logoName: 'https://invest-brands.cdn-tinkoff.ru/RU000A102RX6x160.png',
      isin: 'RU000A0ZZG02',
      isFavorite: false,
      sector: 'Consumer',
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
      exchangeName: 'Московская биржа',
      exchangeLogo: 'https://invest-brands.cdn-tinkoff.ru/exchanges/MosExchange.png',
      countryName: 'Россия',
      countryLogo: 'https://invest-brands.cdn-tinkoff.ru/countries/flags/RU.png',
    },
    {
      id: 5,
      name: 'Хэдхантер',
      ticker: 'HEAD',
      logoName: 'https://invest-brands.cdn-tinkoff.ru/US42207L1061x160.png',
      isin: 'RU000A107662',
      isFavorite: false,
      sector: 'IT',
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
      exchangeName: 'Московская биржа',
      exchangeLogo: 'https://invest-brands.cdn-tinkoff.ru/exchanges/MosExchange.png',
      countryName: 'Россия',
      countryLogo: 'https://invest-brands.cdn-tinkoff.ru/countries/flags/RU.png',
    },
    {
      id: 6,
      name: 'Магнит',
      ticker: 'MGNT',
      logoName: 'https://invest-brands.cdn-tinkoff.ru/RU000A0JKQU8x160.png',
      isin: 'RU000A0JKQU8',
      isFavorite: false,
      sector: 'Consumer',
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
      exchangeName: 'Московская биржа',
      exchangeLogo: 'https://invest-brands.cdn-tinkoff.ru/exchanges/MosExchange.png',
      countryName: 'Россия',
      countryLogo: 'https://invest-brands.cdn-tinkoff.ru/countries/flags/RU.png',
    },
    {
      id: 7,
      name: 'Московская Биржа',
      ticker: 'MOEX',
      logoName: 'https://invest-brands.cdn-tinkoff.ru/RU000A0JR4A1x160.png',
      isin: 'RU000A0JR4A1',
      isFavorite: false,
      sector: 'Consumer',
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
      exchangeName: 'Московская биржа',
      exchangeLogo: 'https://invest-brands.cdn-tinkoff.ru/exchanges/MosExchange.png',
      countryName: 'Россия',
      countryLogo: 'https://invest-brands.cdn-tinkoff.ru/countries/flags/RU.png',
    },
    {
      id: 8,
      name: 'Сургутнефтегаз',
      ticker: 'SNGS',
      logoName: 'https://invest-brands.cdn-tinkoff.ru/RU0008926258x160.png',
      isin: 'RU0008926258',
      isFavorite: false,
      sector: 'Energy',
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
      exchangeName: 'Московская биржа',
      exchangeLogo: 'https://invest-brands.cdn-tinkoff.ru/exchanges/MosExchange.png',
      countryName: 'Россия',
      countryLogo: 'https://invest-brands.cdn-tinkoff.ru/countries/flags/RU.png',
    },
    {
      id: 9,
      name: 'ММК',
      ticker: 'MAGN',
      logoName: 'https://invest-brands.cdn-tinkoff.ru/RU0009084396x160.png',
      isin: 'RU0009084396',
      isFavorite: false,
      sector: 'Materials',
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
      exchangeName: 'Московская биржа',
      exchangeLogo: 'https://invest-brands.cdn-tinkoff.ru/exchanges/MosExchange.png',
      countryName: 'Россия',
      countryLogo: 'https://invest-brands.cdn-tinkoff.ru/countries/flags/RU.png',
    },
    {
      id: 10,
      name: 'Аэрофлот',
      ticker: 'AFLT',
      logoName: 'https://invest-brands.cdn-tinkoff.ru/RU0009062285x160.png',
      isin: 'RU0009062285',
      isFavorite: false,
      sector: 'Consumer',
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
      exchangeName: 'Московская биржа',
      exchangeLogo: 'https://invest-brands.cdn-tinkoff.ru/exchanges/MosExchange.png',
      countryName: 'Россия',
      countryLogo: 'https://invest-brands.cdn-tinkoff.ru/countries/flags/RU.png',
    },
  ];

  constructor() {}

  public getStocks(): Observable<IStock[]> {
    return of(this.stocks);
  }

  public getStock(ticker: IStock['ticker']): Observable<IStock | null> {
    return this.getStocks().pipe(
      map((stocks) => stocks.find((stock) => stock.ticker === ticker) || null),
    );
  }

  public setStock(stock: IStock): void {
    const index = this.stocks.findIndex((stock) => stock.id === stock.id);

    if (index > -1) {
      this.stocks.splice(index, 1, stock);
    }
  }
}
