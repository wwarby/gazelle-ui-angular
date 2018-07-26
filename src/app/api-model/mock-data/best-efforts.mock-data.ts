import { IBestEffort } from '../best-effort';
import { sortBy } from 'lodash';
import { activities } from './activities.mock-data';
import { ValueTransformer } from '@angular/compiler/src/util';

class BestEffortFactory {

  private static bestEffortData: IBestEffort[];

  public static getBestEfforts() {

    if (!this.bestEffortData) {

      this.bestEffortData = [];

      const distances = [1000, 2000, 5000, 10000, 15000, 21098, 42195];

      distances.forEach(distance => {

        const bestEffortsForDistance = activities
          .filter(x => x.totalDistance >= distance)
          .sort((a, b) => a.pace < b.pace ? 1 : a.pace > b.pace ? -1 : 0)
          .slice(0, 50)
          .map(activity => {
            return {
              activity,
              distance,
              time: activity.pace * (distance / 1000)
            } as IBestEffort;
          })
          .sort((a, b) => a.time < b.time ? -1 : a.time > b.time ? 1 : 0);

        bestEffortsForDistance.forEach((bestEffort, index) => {
          bestEffort.position = index + 1;
        });
        this.bestEffortData = this.bestEffortData.concat(bestEffortsForDistance);
      });

      this.bestEffortData.forEach((bestEffort, index) => {
        bestEffort.id = index + 1;
      });

    }

    return this.bestEffortData;

  }

}

export const bestEfforts = BestEffortFactory.getBestEfforts();
