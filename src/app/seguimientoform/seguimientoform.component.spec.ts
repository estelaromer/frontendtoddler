import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguimientoformComponent } from './seguimientoform.component';

describe('SeguimientoformComponent', () => {
  let component: SeguimientoformComponent;
  let fixture: ComponentFixture<SeguimientoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeguimientoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguimientoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
