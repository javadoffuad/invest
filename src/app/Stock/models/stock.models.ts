export interface IStock {
  id: number;
  name: string;
  shortName: string;
  logoName: string;
  isin: string;
  price: IPrice;
  lotSize: number;
  sector: SectorCode,
  earnings: {
    absolute: IPrice;
    previousPrice: IPrice;
    relative: number;
  },
  sectorId: IActivitySector['id'];
}

export type Currency = 'USD' | 'RUB';

export interface IPrice {
  value: number;
  currency: Currency;
}

type SectorCode = 'Materials' | 'Consumer' | 'IT' | 'Energy' | 'Utilities' | 'Industrials';

export interface IActivitySector {
  id: number;
  name: string;
}
