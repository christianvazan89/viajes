import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuponescovidComponent } from './cuponescovid.component';

describe('CuponescovidComponent', () => {
  let component: CuponescovidComponent;
  let fixture: ComponentFixture<CuponescovidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuponescovidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuponescovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
