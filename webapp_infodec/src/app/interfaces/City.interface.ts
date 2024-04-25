export interface City {
  success:  boolean;
  response: Response[];
}

export interface Response {
  id:         number;
  country_id: number;
  name:       string;
  created_at: null;
  updated_at: null;
  country:    Country;
}

export interface Country {
  id:         number;
  name:       string;
  code:       string;
  created_at: null;
  updated_at: null;
}
