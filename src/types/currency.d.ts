export interface ICurrencyResponse {
  status: boolean;
  message: string;
  timestamp: number;
  data: ICurrency[];
}

export interface ICurrency {
  name: string;
  code: string;
  encodedSymbol: string;
  symbol: string;
}
