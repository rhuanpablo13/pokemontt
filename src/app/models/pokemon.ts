export interface Attacks {
  name:string;
  cost: Array<string>;
  damage:string;
  text:string;
  convertedEnergyCost:number;
}

export interface Imagens {
  large: string;
  small: string;
}

export interface IValues {
  type: string,
  value: string;
}

export interface Pokemon {
  id:string;
  name: string;
  types: Array<string>;
  images: Imagens;
  resistances?: Array<IValues>;
  weaknesses?: Array<IValues>;
  attacks?: Array<Attacks>;
}