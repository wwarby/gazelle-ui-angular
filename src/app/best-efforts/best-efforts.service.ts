import { Injectable } from '@angular/core';
import { IBestEffort } from '../api-model/best-effort';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class BestEffortsService {

  public readonly baseUrl = 'api/best-efforts';

  constructor(private readonly http: HttpClient) { }

  public getBestEfforts(distance?: number, limit?: number) {

    const params = new HttpParams()
      .set('distance', `${distance}`)
      .set('limit', `${limit}`);

    return this.http.get<IBestEffort[]>(this.baseUrl, {
      params
    });
  }

}
