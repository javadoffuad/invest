import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ICurrency } from '../../../models/currency.models';

@Injectable({
  providedIn: 'root',
})
export class CurrenciesService {
  private items: ICurrency[] = [
    {
      id: 1,
      name: 'Доллар США',
      shortName: '',
      symbolType: 'Currency',
      isin: 'USD000UTSTOM',
      currency: 'RUB',
      lotSize: 1,
      exchangeName: 'Московская биржа',
      exchangeLogo: 'https://invest-brands.cdn-tinkoff.ru/exchanges/MosExchange.png',
      logoName: 'USD1.png',
      // "brand": "Dollar",
      earnings: {
        absolute: {
          currency: 'RUB',
          value: 0,
        },
        relative: 0,
        previousPrice: {
          currency: 'RUB',
          value: 89.1025,
        },
      },
    },
    {
      id: 2,
      name: 'Евро',
      shortName: 'EURRUB',
      symbolType: 'Currency',
      isin: 'USD000UTSTOM',
      currency: 'RUB',
      lotSize: 1,
      exchangeName: 'Московская биржа',
      exchangeLogo: 'https://invest-brands.cdn-tinkoff.ru/exchanges/MosExchange.png',
      logoName: 'EUR1.png',
      // "brand": "EURRUB",
      earnings: {
        absolute: {
          currency: 'RUB',
          value: 0,
        },
        relative: 0,
        previousPrice: {
          currency: 'RUB',
          value: 95.62,
        },
      },
    },
    {
      id: 3,
      name: 'Фунт стерлингов',
      shortName: 'GBPRUB',
      symbolType: 'Currency',
      isin: 'GBPRUB_TOM',
      currency: 'RUB',
      lotSize: 1,
      exchangeName: 'Московская биржа',
      exchangeLogo: 'https://invest-brands.cdn-tinkoff.ru/exchanges/MosExchange.png',
      logoName: 'GBP1.png',
      // "brand": "Pound sterling",
      earnings: {
        absolute: {
          currency: 'RUB',
          value: 0,
        },
        relative: 0,
        previousPrice: {
          currency: 'RUB',
          value: 48,
        },
      },
    },
    {
      id: 4,
      name: 'Швейцарский франк',
      shortName: 'CHFRUB',
      symbolType: 'Currency',
      isin: 'CHFRUB_TOM',
      currency: 'RUB',
      lotSize: 1,
      exchangeName: 'Московская биржа',
      exchangeLogo: 'https://invest-brands.cdn-tinkoff.ru/exchanges/MosExchange.png',
      logoName: 'CHF1.png',
      // "brand": "Swiss frank",
      earnings: {
        absolute: {
          currency: 'RUB',
          value: 0,
        },
        relative: 0,
        previousPrice: {
          currency: 'RUB',
          value: 90,
        },
      },
    },
  ];

  constructor() {}

  public getItems(): Observable<ICurrency[]> {
    return of(this.items);
  }

  public getItem(shortName: ICurrency['shortName']): ICurrency | null {
    return this.items.find((stock) => stock.shortName === shortName) || null;
  }
}
