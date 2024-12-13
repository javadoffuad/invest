import { IPrice } from './stock.models';

export interface ICurrency {
  id: number;
  name: string;
  currency: string;
  symbolType: string;
  shortName: string;
  logoName: string;
  isin: string;
  price: IPrice;
  lotSize: number;
  earnings: {
    absolute: IPrice;
    previousPrice: IPrice;
    relative: number;
  };
  exchangeName: string;
  exchangeLogo: string;
}
