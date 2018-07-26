import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { activities } from '../api-model/mock-data/activities.mock-data';

export class BestEffortsMockDb implements InMemoryDbService {

  public createDb(requestInfo: RequestInfo) {
    return { activities };
  }

}
