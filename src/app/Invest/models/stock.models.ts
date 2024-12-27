export interface IStock {
  id: number;
  name: string;
  ticker: string;
  logoName: string;
  isin: string;
  isFavorite: boolean;
  price: IPrice;
  lotSize: number;
  sector: string;
  earnings: {
    absolute: IPrice;
    previousPrice: IPrice;
    relative: number;
  };
  sectorId: ISector['id'];
  exchangeName: string;
  exchangeLogo: string;
  countryName: string;
  countryLogo: string;
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
