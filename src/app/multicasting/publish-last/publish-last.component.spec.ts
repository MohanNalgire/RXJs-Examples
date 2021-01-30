import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishLastComponent } from './publish-last.component';

describe('PublishLastComponent', () => {
  let component: PublishLastComponent;
  let fixture: ComponentFixture<PublishLastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishLastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishLastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
