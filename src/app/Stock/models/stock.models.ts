export interface IStock {
  id: number;
  name: string;
  shortName: string;
  logoName: string;
  isin: string;
  price: IPrice;
  lotSize: number;
  sector: string,
  earnings: {
    absolute: IPrice;
    previousPrice: IPrice;
    relative: number;
  },
  sectorId: ISector['id'];
}

export type Currency = 'USD' | 'RUB';

export interface IPrice {
  value: number;
  currency: Currency;
}

export interface ISector {
  id: number;
  code: string;
  name: string;
}
