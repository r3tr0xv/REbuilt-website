import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotDealComponent } from './hot-deal.component';

describe('HotDealComponent', () => {
  let component: HotDealComponent;
  let fixture: ComponentFixture<HotDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotDealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
