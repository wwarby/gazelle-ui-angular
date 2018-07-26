import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TestsModule } from '../shared/tests.module';
import { BestEffortsComponent } from './best-efforts.component';
import { bestEfforts } from '../api-model/mock-data/best-efforts.mock-data';

describe('BestEffortsComponent', () => {
  let component: BestEffortsComponent;
  let fixture: ComponentFixture<BestEffortsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestsModule,
        SharedModule
      ],
      declarations: [ BestEffortsComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                bestEfforts: bestEfforts.filter(x => x.distance === 5000 && x.position <= 10)
              }
            }
          }
        }
      ]
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

  it('should retrieve best efforts', () => {
    expect(component.bestEfforts).toBeTruthy();
    expect(component.bestEfforts.length).toBe(10);
  });
});
