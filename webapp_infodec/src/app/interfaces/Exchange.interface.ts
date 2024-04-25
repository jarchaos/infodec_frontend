export interface Exchange {
  success:  boolean;
  exchange: ExchangeClass;
  info:     Info;
}

export interface ExchangeClass {
  COP:         number;
  countryRate: number;
}

export interface Info {
  name:   string;
  symbol: string;
}
