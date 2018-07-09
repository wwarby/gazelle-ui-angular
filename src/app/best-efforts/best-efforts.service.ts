import { Injectable } from '@angular/core';
import { BestEffort } from '../api-model/best-effort.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BestEffortsService {

  public readonly baseUrl = 'api/best-efforts';

  constructor(private readonly http: HttpClient) { }

  public getBestEfforts(distance: number) {
    return this.http.get<BestEffort[]>(this.baseUrl);
  }

}
