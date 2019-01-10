import { Component, OnInit } from '@angular/core';
import { IBestEffort } from '../api-model/best-effort';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-best-efforts',
  templateUrl: './best-efforts.component.html',
  styleUrls: ['./best-efforts.component.scss']
})
export class BestEffortsComponent {

  public bestEfforts: IBestEffort[] = [];

  constructor(private readonly route: ActivatedRoute) {
    this.bestEfforts = this.route.snapshot.data.bestEfforts;
  }

  public selectRow(row: IBestEffort) {
    // Deselect existing rows
    this.bestEfforts.forEach(x => {
      if (x !== row) {
        x.selected = false;
      }
    });
    // Select new row
    if (!row.selected) {
      row.selected = true;
    }
  }

}
