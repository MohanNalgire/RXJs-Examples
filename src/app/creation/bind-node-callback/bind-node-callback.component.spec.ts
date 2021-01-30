import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindNodeCallbackComponent } from './bind-node-callback.component';

describe('BindNodeCallbackComponent', () => {
  let component: BindNodeCallbackComponent;
  let fixture: ComponentFixture<BindNodeCallbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindNodeCallbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindNodeCallbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
