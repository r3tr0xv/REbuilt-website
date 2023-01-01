import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackSalesComponent } from './track-sales.component';

describe('TrackSalesComponent', () => {
  let component: TrackSalesComponent;
  let fixture: ComponentFixture<TrackSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
