import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BufferToggleComponent } from './buffer-toggle.component';

describe('BufferToggleComponent', () => {
  let component: BufferToggleComponent;
  let fixture: ComponentFixture<BufferToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BufferToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BufferToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
