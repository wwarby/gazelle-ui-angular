import { Injectable } from '@angular/core';
import { BestEffort } from '../api-model/best-effort.model';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BestEffortsService } from './best-efforts.service';
import { Observable } from 'rxjs';

@Injectable()
export class BestEffortsResolver implements Resolve<BestEffort[]> {

  constructor(private readonly bestEffortsService: BestEffortsService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BestEffort[]> {
    return this.bestEffortsService.getBestEfforts(5000);
  }

}
