import { Injectable } from '@angular/core';
import {IActivitySector} from '../models/stock.models';

@Injectable({
  providedIn: 'root'
})
export class ActivitySectorsService {
  private readonly items: IActivitySector[] = [
    {
      id: 1,
      name: 'Сырьевая промышленность'
    },
    {
      id: 2,
      name: 'Потребительские товары и услуги'
    },
    {
      id: 3,
      name: 'Недвижимость'
    },
    {
      id: 4,
      name: 'Информационные технологии'
    },
    {
      id: 5,
      name: 'Финансовый сектор'
    },
    {
      id: 6,
      name: 'Энергетика'
    },
  ]

  constructor() { }

  public getItems(): IActivitySector[] {
    return this.items;
  }

  public getItem(sectorId: IActivitySector['id']): IActivitySector | null {
    return this.items.find(item => item.id === sectorId) || null;
  }
}
