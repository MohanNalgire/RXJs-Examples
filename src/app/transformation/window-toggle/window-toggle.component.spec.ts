import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowToggleComponent } from './window-toggle.component';

describe('WindowToggleComponent', () => {
  let component: WindowToggleComponent;
  let fixture: ComponentFixture<WindowToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
