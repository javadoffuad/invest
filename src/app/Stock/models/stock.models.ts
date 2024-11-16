
// "earnings": {
//   "absolute": {
//     "currency": "RUB",
//       "value": -0.65
//   },
//   "relative": -0.0084,
//     "previousPrice": {
//     "currency": "RUB",
//       "value": 77.25
//   }
// },

export interface IStock {
  id: number;
  name: string;
  shortName: string;
  price: IPrice;
  lotSize: number;
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

export interface IActivitySector {
  id: number;
  name: string;
}
