import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperacaoComponent } from './recuperacao.component';

describe('RecuperacaoComponent', () => {
  let component: RecuperacaoComponent;
  let fixture: ComponentFixture<RecuperacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
