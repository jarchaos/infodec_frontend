export interface Weather {
  coord:   Coord;
  weather: WeatherElement[];
  base:    string;
  main:    Main;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
}

export interface WeatherElement {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}
