import { IActivity } from '../activity';
import { ISplit } from '../split';
import { random } from 'lodash';

class ActivityFactory {

  private static activityData: IActivity[];

  public static getActivities() {

    if (!this.activityData) {

      this.activityData = [];

      // Random seed data
      const maxDate = new Date(Date.now());
      const minDate = new Date(Date.now());
      minDate.setFullYear(minDate.getFullYear() - 3);
      const locations = [
        'Camden', 'Greenwich', 'Hackney', 'Hammersmith', 'Islington', 'Kensington', 'Lambeth',
        'Lewisham', 'Southwark', 'Tower Hamlets', 'Wandsworth', 'Westminster', 'Barking', 'Barnet',
        'Bexley', 'Brent', 'Bromley', 'Croydon', 'Ealing', 'Enfield', 'Haringey', 'Harrow',
        'Havering', 'Hillingdon', 'Hounslow', 'Kingston upon Thames', 'Merton', 'Newham',
        'Redbridge', 'Richmond upon Thames', 'Sutton', 'Waltham Forest'
      ];

      for (let x = 0; x < 250; x++) {
        const activity = {
          id: x + 1,
          date: new Date(minDate.getTime() + Math.random() * (maxDate.getTime() - minDate.getTime())),
          totalDistance: random(2000, 50000),
          totalElevation: random(1, 100),
          kudosCount: random(1, 30),
          location: locations[Math.floor(Math.random() * locations.length)],
          splits: []
        } as IActivity;

        this.activityData.push(activity);
      }

      this.activityData.forEach(x => {

        if (x.date.getHours() < 4 || x.date.getHours() >= 23) {
          x.name = 'Night run';
        } else if (x.date.getHours() < 12) {
          x.name = 'Morning run';
        } else if (x.date.getHours() < 14) {
          x.name = 'Lunch run';
        } else if (x.date.getHours() < 18) {
          x.name = 'Afternoon run';
        } else if (x.date.getHours() < 23) {
          x.name = 'Evening run';
        }

        x.movingTime = Math.floor(x.totalDistance / random(2.5, 5));
        x.pace = Math.floor(x.movingTime / (x.totalDistance / 1000));
        const totalSplits = Math.ceil(x.totalDistance / 1000);

        for (let s = 0; s < totalSplits; s++) {
          x.splits.push({
            id: s + 1,
            totalElevation: Math.round((x.totalElevation / totalSplits) * random(0.2, 5)),
            movingTime: Math.round((x.movingTime / totalSplits) * random(0.8, 1.2))
          } as ISplit);
        }

      });

    }

    return this.activityData;

  }

}

export const activities = ActivityFactory.getActivities();
