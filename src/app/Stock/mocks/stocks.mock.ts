import { IActivitySector, IStock } from "../models/stock.models";

export const mockStocks: IStock[] = [
    {
      id: 1,
      name: 'Норильский никель',
      shortName: 'GMKN',
      price: '100,8',
      sectorId: 1,
    },
    {
      id: 2,
      name: 'Мечел',
      shortName: 'MTLR',
      price: '103,96',
      sectorId: 1,
    },
    {
      id: 3,
      name: 'НЛМК',
      shortName: 'NLMK',
      price: '121,8',
      sectorId: 1,
    },
    {
      id: 3,
      name: 'Аэрофлот',
      shortName: 'AFLT',
      price: '55,99',
      sectorId: 2,
    },
    {
      id: 4,
      name: 'ГК Самолет',
      shortName: 'SMLT',
      price: '1438',
      sectorId: 3,
    },
    {
      id: 5,
      name: 'Хэдхантер',
      shortName: 'HEAD',
      price: '4245',
      sectorId: 4,
    },
    {
      id: 6,
      name: 'Магнит',
      shortName: 'MGNT',
      price: '4520',
      sectorId: 2,
    },
    {
      id: 7,
      name: 'Московская Биржа',
      shortName: 'MOEX',
      price: '189,32',
      sectorId: 5,
    },
    {
      id: 8,
      name: 'Сургутнефтегаз',
      shortName: 'SNGS',
      price: '23,715',
      sectorId: 5,
    },
    {
      id: 9,
      name: 'ММК',
      shortName: 'MAGN',
      price: '35,855',
      sectorId: 1,
    },
];

export const mockActivitySectors: IActivitySector[] = [
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
];