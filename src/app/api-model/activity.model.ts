import { Split } from './split.model';

export class Activity {

  public id: number;

  public name: string;

  public date: Date;

  public pace: number;

  public totalDistance: number;

  public movingTime: number;

  public totalElevation: number;

  public location: string;

  public kudosCount: number;

  public splits: Split[] = [];

}
