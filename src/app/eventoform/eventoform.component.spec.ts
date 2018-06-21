import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoformComponent } from './eventoform.component';

describe('EventoformComponent', () => {
  let component: EventoformComponent;
  let fixture: ComponentFixture<EventoformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventoformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
