import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { BestEffort } from '../api-model/best-effort.model';
import { Activity } from '../api-model/activity.model';
import { Split } from '../api-model/split.model';

export class BestEffortsMockData implements InMemoryDbService {

  public createDb(requestInfo: RequestInfo) {

    const bestEfforts = [
      {
        id: 1,
        distance: 5000,
        time: 1494,
        activity: {
          id: 1,
          date: new Date('2018-06-03 12:00'),
          name: 'Under 25 for the first time!!!',
          movingTime: 1499,
          totalDistance: 5012,
          totalElevation: 9,
          kudosCount: 8,
          location: 'Nazeing, Essex',
          pace: 299,
          splits: [
            {
              id: 1,
              movingTime: 289,
              totalElevation: -17
            } as Split,
            {
              id: 2,
              movingTime: 265,
              totalElevation: -4
            } as Split,
            {
              id: 3,
              movingTime: 246,
              totalElevation: 7
            } as Split,
            {
              id: 4,
              movingTime: 239,
              totalElevation: 5
            } as Split,
            {
              id: 5,
              movingTime: 221,
              totalElevation: 5
            } as Split
          ]
        } as Activity
      } as BestEffort,
      {
        id: 2,
        distance: 5000,
        time: 1508,
        activity: {
          id: 2,
          date: new Date('2018-05-19 12:00'),
          name: 'Lunch Run - Nearly at 25',
          movingTime: 1509,
          totalDistance: 5002,
          totalElevation: 12,
          kudosCount: 4,
          location: 'Broxbourne, Hertfordshire',
          pace: 304,
          splits: [
            {
              id: 1,
              movingTime: 289,
              totalElevation: -17
            } as Split,
            {
              id: 2,
              movingTime: 265,
              totalElevation: -4
            } as Split,
            {
              id: 3,
              movingTime: 246,
              totalElevation: 7
            } as Split,
            {
              id: 4,
              movingTime: 239,
              totalElevation: 5
            } as Split,
            {
              id: 5,
              movingTime: 221,
              totalElevation: 5
            } as Split
          ]
        } as Activity
      } as BestEffort,
      {
        id: 3,
        distance: 5000,
        time: 1533,
        activity: {
          id: 3,
          date: new Date('2018-04-29 12:00'),
          name: 'Lunch Run',
          movingTime: 1509,
          totalDistance: 5230,
          totalElevation: 13,
          kudosCount: 7,
          location: 'Nazeing, Essex',
          pace: 314,
          splits: [
            {
              id: 1,
              movingTime: 289,
              totalElevation: -17
            } as Split,
            {
              id: 2,
              movingTime: 265,
              totalElevation: -4
            } as Split,
            {
              id: 3,
              movingTime: 246,
              totalElevation: 7
            } as Split,
            {
              id: 4,
              movingTime: 239,
              totalElevation: 5
            } as Split,
            {
              id: 5,
              movingTime: 221,
              totalElevation: 5
            } as Split
          ]
        } as Activity
      } as BestEffort,
      {
        id: 4,
        distance: 5000,
        time: 1537,
        activity: {
          id: 4,
          date: new Date('2018-04-26 12:00'),
          name: 'Gunpowder Parkrun',
          movingTime: 1509,
          totalDistance: 5002,
          totalElevation: -2,
          kudosCount: 6,
          location: 'Chingford, London',
          pace: 315,
          splits: [
            {
              id: 1,
              movingTime: 289,
              totalElevation: -17
            } as Split,
            {
              id: 2,
              movingTime: 265,
              totalElevation: -4
            } as Split,
            {
              id: 3,
              movingTime: 246,
              totalElevation: 7
            } as Split,
            {
              id: 4,
              movingTime: 239,
              totalElevation: 5
            } as Split,
            {
              id: 5,
              movingTime: 221,
              totalElevation: 5
            } as Split
          ]
        } as Activity
      } as BestEffort
    ];

    return {'best-efforts': bestEfforts };
  }

}
