import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularformComponent } from './circularform.component';

describe('CircularformComponent', () => {
  let component: CircularformComponent;
  let fixture: ComponentFixture<CircularformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircularformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
