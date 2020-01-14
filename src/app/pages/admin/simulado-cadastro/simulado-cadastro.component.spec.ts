import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladoCadastroComponent } from './simulado-cadastro.component';

describe('SimuladoCadastroComponent', () => {
  let component: SimuladoCadastroComponent;
  let fixture: ComponentFixture<SimuladoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimuladoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuladoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
