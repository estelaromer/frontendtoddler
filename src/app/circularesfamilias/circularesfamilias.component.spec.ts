import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularesfamiliasComponent } from './circularesfamilias.component';

describe('CircularesfamiliasComponent', () => {
  let component: CircularesfamiliasComponent;
  let fixture: ComponentFixture<CircularesfamiliasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircularesfamiliasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularesfamiliasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
