import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromEventPatternComponent } from './from-event-pattern.component';

describe('FromEventPatternComponent', () => {
  let component: FromEventPatternComponent;
  let fixture: ComponentFixture<FromEventPatternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromEventPatternComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FromEventPatternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
