export interface Pokemon {
  id:string;
  name: string;
  types:[];
  images: any;
}

export interface Attacks {
  name:string;
  cost: Array<string>;
  damage:string;
  text:string;
  convertedEnergyCost:number;
}
