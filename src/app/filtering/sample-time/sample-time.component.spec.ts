import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTimeComponent } from './sample-time.component';

describe('SampleTimeComponent', () => {
  let component: SampleTimeComponent;
  let fixture: ComponentFixture<SampleTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
