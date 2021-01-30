import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindCallbackComponent } from './bind-callback.component';

describe('BindCallbackComponent', () => {
  let component: BindCallbackComponent;
  let fixture: ComponentFixture<BindCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindCallbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
