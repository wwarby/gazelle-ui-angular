import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestEffortsComponent } from './best-efforts.component';
import { TestsModule } from '../shared/tests.module';

describe('BestEffortsComponent', () => {
  let component: BestEffortsComponent;
  let fixture: ComponentFixture<BestEffortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TestsModule ],
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
