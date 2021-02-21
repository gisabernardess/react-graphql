export interface Job {
  id: ID;
  title: string;
  locationNames: string;
  applyUrl: string;
  company: Company;
  cities: [City];
  countries: [Country];
  remotes: [Remote];
}

export interface Company {
  id: ID;
  name: string;
}

export interface City {
  id: ID;
  name: string;
}

export interface Country {
  id: ID;
  name: string;
}

export interface Remote {
  id: ID;
}
