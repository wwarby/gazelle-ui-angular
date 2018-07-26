import { Injectable } from '@angular/core';
import { IBestEffort } from '../api-model/best-effort';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { BestEffortsService } from './best-efforts.service';
import { Observable } from 'rxjs';

@Injectable()
export class BestEffortsResolver implements Resolve<IBestEffort[]> {

  constructor(private readonly bestEffortsService: BestEffortsService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBestEffort[]> {
    return this.bestEffortsService.getBestEfforts(5000, 10);
  }

}
