import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinOrCreationComponent } from './join-or-creation.component';

describe('JoinOrCreationComponent', () => {
  let component: JoinOrCreationComponent;
  let fixture: ComponentFixture<JoinOrCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinOrCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinOrCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
