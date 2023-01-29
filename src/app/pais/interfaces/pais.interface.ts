export interface Country {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  cioc?:        string;
  independent:  boolean;
  status:       Status;
  unMember:     boolean;
  currencies?:  Currencies;
  idd:          Idd;
  capital?:     string[];
  altSpellings: string[];
  region:       Region;
  subregion?:   string;
  languages:    Languages;
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms?:    Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        CoatOfArms;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  RWF?: Ang;
  USD?: Ang;
  KYD?: Ang;
  GBP?: Ang;
  CKD?: Ang;
  NZD?: Ang;
  THB?: Ang;
  DKK?: Ang;
  FOK?: Ang;
  XCD?: Ang;
  MMK?: Ang;
  EUR?: Ang;
  SBD?: Ang;
  STN?: Ang;
  NOK?: Ang;
  ISK?: Ang;
  AUD?: Ang;
  BAM?: BAM;
  TTD?: Ang;
  SHP?: Ang;
  MVR?: Ang;
  ANG?: Ang;
  PLN?: Ang;
  BMD?: Ang;
  UGX?: Ang;
  SZL?: Ang;
  ZAR?: Ang;
  FKP?: Ang;
  CHF?: Ang;
  XPF?: Ang;
  KID?: Ang;
}

export interface Ang {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  EngClass;
  fra?: EngClass;
}

export interface EngClass {
  f: string;
  m: string;
}

export interface Idd {
  root?:     string;
  suffixes?: string[];
}

export interface Languages {
  eng?: EngEnum;
  fra?: string;
  kin?: string;
  nld?: string;
  pap?: string;
  mah?: string;
  rar?: string;
  tha?: string;
  dan?: string;
  fao?: string;
  kal?: string;
  mya?: string;
  fin?: string;
  swe?: string;
  deu?: string;
  ltz?: string;
  por?: string;
  nor?: string;
  isl?: string;
  nau?: string;
  bos?: string;
  hrv?: string;
  srp?: string;
  mri?: string;
  nzs?: string;
  div?: string;
  pol?: string;
  gle?: string;
  swa?: string;
  ssw?: string;
  pih?: string;
  cal?: string;
  cha?: string;
  cat?: string;
  gsw?: string;
  ita?: string;
  roh?: string;
  gil?: string;
}

export enum EngEnum {
  English = "English",
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}
