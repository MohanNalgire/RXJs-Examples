import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditTimeComponent } from './audit-time.component';

describe('AuditTimeComponent', () => {
  let component: AuditTimeComponent;
  let fixture: ComponentFixture<AuditTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
