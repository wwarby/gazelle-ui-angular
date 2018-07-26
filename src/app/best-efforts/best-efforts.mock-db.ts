import { InMemoryDbService, RequestInfo, RequestInfoUtilities, ParsedRequestUrl, ResponseOptions } from 'angular-in-memory-web-api';
import { bestEfforts } from '../api-model/mock-data/best-efforts.mock-data';
import { IBestEffort } from '../api-model/best-effort';
import { HttpRequest } from '@angular/common/http';

export class BestEffortsMockDb implements InMemoryDbService {

  public createDb(requestInfo: RequestInfo) {
    return { 'best-efforts': bestEfforts };
  }

  public parseRequestUrl(url: string, utils: RequestInfoUtilities): ParsedRequestUrl {

    const newUrl = url
      .replace(/distance=(\d+)/, 'distance=^$1$')
      .replace(/limit=\d+/, 'limit=');

    const parsed = utils.parseRequestUrl(newUrl);

    return parsed;
  }

  responseInterceptor(resOptions: ResponseOptions, reqInfo: RequestInfo) {
    const limit = parseInt((reqInfo.req as HttpRequest<any>).params.get('limit'), 10);
    if (limit && limit > 0) {
      if (resOptions.body) {
        resOptions.body = (resOptions.body as IBestEffort[]).slice(0, limit);
      }
    }

    return resOptions;
  }

}
