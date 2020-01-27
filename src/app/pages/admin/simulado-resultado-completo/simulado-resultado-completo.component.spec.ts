import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladoResultadoCompletoComponent } from './simulado-resultado-completo.component';

describe('SimuladoResultadoCompletoComponent', () => {
  let component: SimuladoResultadoCompletoComponent;
  let fixture: ComponentFixture<SimuladoResultadoCompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimuladoResultadoCompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuladoResultadoCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
