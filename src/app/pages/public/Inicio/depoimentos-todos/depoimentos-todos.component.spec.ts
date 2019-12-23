import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepoimentosTodosComponent } from './depoimentos-todos.component';

describe('DepoimentosTodosComponent', () => {
  let component: DepoimentosTodosComponent;
  let fixture: ComponentFixture<DepoimentosTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepoimentosTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepoimentosTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
