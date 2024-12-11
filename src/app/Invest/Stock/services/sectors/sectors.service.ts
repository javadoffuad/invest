import { Injectable } from '@angular/core';
import { ISector } from '../../../models/stock.models';

@Injectable({
  providedIn: 'root',
})
export class SectorsService {
  private readonly items: ISector[] = [
    {
      id: 1,
      code: 'Materials',
      name: 'Сырьевая промышленность',
    },
    {
      id: 2,
      code: 'Consumer',
      name: 'Потребительские товары и услуги',
    },
    {
      id: 3,
      code: 'RealEstate',
      name: 'Недвижимость',
    },
    {
      id: 4,
      code: 'IT',
      name: 'Информационные технологии',
    },
    {
      id: 5,
      code: 'Financial',
      name: 'Финансовый сектор',
    },
    {
      id: 6,
      code: 'Energy',
      name: 'Энергетика',
    },
    {
      id: 7,
      code: 'Utilities',
      name: 'Электроэнергетика',
    },
    {
      id: 8,
      code: 'Other',
      name: 'Другое',
    },
    {
      id: 9,
      code: 'HealthCare',
      name: 'Здравоохранение',
    },
    {
      id: 10,
      code: 'GreenEnergy',
      name: 'Зеленая энергетика',
    },
    {
      id: 11,
      code: 'Ecomaterials',
      name: 'Материалы для эко-технологий',
    },
    {
      id: 12,
      code: 'Industrials',
      name: 'Машиностроение и транспорт',
    },
    {
      id: 13,
      code: 'Telecom',
      name: 'Телекоммуникации',
    },
    {
      id: 14,
      code: 'Electrocars',
      name: 'Электротранспорт и комплектующие',
    },
    {
      id: 15,
      code: 'GreenBuildings',
      name: 'Энергоэффективные здания',
    },
  ];

  constructor() {}

  public getItems(): ISector[] {
    return this.items;
  }

  public getItemById(sectorId: ISector['id']): ISector | null {
    return this.items.find((item) => item.id === sectorId) || null;
  }

  public getItemByCode(code: ISector['code']): ISector | null {
    return this.items.find((item) => item.code === code) || null;
  }
}
