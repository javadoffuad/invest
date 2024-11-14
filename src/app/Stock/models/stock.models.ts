
export interface IStock {
  id: number;
  name: string;
  shortName: string;
  price: IPrice;
  lotSize: number;
  sectorId: IActivitySector['id'];
}

export type Currency = 'USD' | 'RUB';

export interface IPrice {
  value: number;
  currency: Currency;
}

export interface IActivitySector {
  id: number;
  name: string;
}
