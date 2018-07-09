import { Component, OnInit } from '@angular/core';
import { BestEffort } from '../api-model/best-effort.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-best-efforts',
  templateUrl: './best-efforts.component.html',
  styleUrls: ['./best-efforts.component.scss']
})
export class BestEffortsComponent implements OnInit {

  public bestEfforts: BestEffort[] = [];

  constructor(private route: ActivatedRoute) {
    this.bestEfforts = this.route.snapshot.data.bestEfforts;
  }

  ngOnInit() {
  }

}
