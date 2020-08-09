import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaViajesComponent } from './tarjeta-viajes.component';

describe('TarjetaViajesComponent', () => {
  let component: TarjetaViajesComponent;
  let fixture: ComponentFixture<TarjetaViajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TarjetaViajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaViajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
