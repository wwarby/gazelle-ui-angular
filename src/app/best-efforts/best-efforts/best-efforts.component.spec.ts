import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestEffortsComponent } from './best-efforts.component';

describe('BestEffortsComponent', () => {
  let component: BestEffortsComponent;
  let fixture: ComponentFixture<BestEffortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestEffortsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestEffortsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
