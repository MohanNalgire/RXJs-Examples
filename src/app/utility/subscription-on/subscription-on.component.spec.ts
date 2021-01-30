import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionOnComponent } from './subscription-on.component';

describe('SubscriptionOnComponent', () => {
  let component: SubscriptionOnComponent;
  let fixture: ComponentFixture<SubscriptionOnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionOnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
