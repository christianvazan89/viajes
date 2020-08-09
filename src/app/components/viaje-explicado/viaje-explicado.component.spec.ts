import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViajeExplicadoComponent } from './viaje-explicado.component';

describe('ViajeExplicadoComponent', () => {
  let component: ViajeExplicadoComponent;
  let fixture: ComponentFixture<ViajeExplicadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViajeExplicadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViajeExplicadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
