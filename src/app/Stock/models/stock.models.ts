
export interface IStock {
  id: number;
  name: string;
  shortName: string;
  price: string;
  sectorId: IActivitySector['id'];
}

export interface IActivitySector {
  id: number;
  name: string;
}
