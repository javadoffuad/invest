import { Injectable } from '@angular/core';
import { ICountry } from '../../models/country.models';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private readonly items: ICountry[] = [
    {
      id: 1,
      name: 'Россия',
    },
    {
      id: 2,
      name: 'США',
    },
    {
      id: 3,
      name: 'Алжир',
    },
    {
      id: 4,
      name: 'Египет',
    },
    {
      id: 5,
      name: 'Белорусия',
    },
    {
      id: 6,
      name: 'Англия',
    },
    {
      id: 7,
      name: 'Китай',
    },
    {
      id: 8,
      name: 'Тунис',
    },
    {
      id: 9,
      name: 'Германия',
    },
    {
      id: 10,
      name: 'Япония',
    },
  ];

  constructor() {}

  public getItems(): ICountry[] {
    return this.items;
  }

  public getItemById(sectorId: ICountry['id']): ICountry | null {
    return this.items.find((item) => item.id === sectorId) || null;
  }
}
