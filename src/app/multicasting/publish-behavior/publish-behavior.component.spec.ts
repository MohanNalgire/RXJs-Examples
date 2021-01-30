import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishBehaviorComponent } from './publish-behavior.component';

describe('PublishBehaviorComponent', () => {
  let component: PublishBehaviorComponent;
  let fixture: ComponentFixture<PublishBehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublishBehaviorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
