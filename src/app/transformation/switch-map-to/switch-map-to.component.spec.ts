import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchMapToComponent } from './switch-map-to.component';

describe('SwitchMapToComponent', () => {
  let component: SwitchMapToComponent;
  let fixture: ComponentFixture<SwitchMapToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchMapToComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchMapToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
