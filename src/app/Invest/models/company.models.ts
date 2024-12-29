export interface ICompany {
  id: number;
  name: string;
  logoName: string;
  brandInfo: string;
  description?: string;
  logoBaseColor: string;
  country: string;
  sector: string;
  externalLinks: {
    main?: string;
  };
  tickers: string[];
}
