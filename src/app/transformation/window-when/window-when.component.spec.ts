import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowWhenComponent } from './window-when.component';

describe('WindowWhenComponent', () => {
  let component: WindowWhenComponent;
  let fixture: ComponentFixture<WindowWhenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowWhenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowWhenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
