import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeMapToComponent } from './merge-map-to.component';

describe('MergeMapToComponent', () => {
  let component: MergeMapToComponent;
  let fixture: ComponentFixture<MergeMapToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeMapToComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeMapToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
