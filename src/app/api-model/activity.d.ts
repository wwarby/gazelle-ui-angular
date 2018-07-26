import { ISplit } from './split';

export interface IActivity {

  id: number;

  name: string;

  date: Date;

  pace: number;

  totalDistance: number;

  movingTime: number;

  totalElevation: number;

  location: string;

  kudosCount: number;

  splits: ISplit[];

}
