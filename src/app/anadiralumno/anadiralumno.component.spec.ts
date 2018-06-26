import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadiralumnoComponent } from './anadiralumno.component';

describe('AnadiralumnoComponent', () => {
  let component: AnadiralumnoComponent;
  let fixture: ComponentFixture<AnadiralumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadiralumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadiralumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
