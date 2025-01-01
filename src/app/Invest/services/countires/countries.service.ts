import { Injectable } from '@angular/core';
import { ICountry } from '../../models/country.models';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private readonly items = of<ICountry[]>([
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
  ]);

  constructor() {}

  public getItems(): Observable<ICountry[]> {
    return this.items;
  }

  public getItemById(itemId: ICountry['id']): Observable<ICountry | null> {
    return this.items.pipe(map((items) => items.find((item) => item.id === itemId) || null));
  }
}
