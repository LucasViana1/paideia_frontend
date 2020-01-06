import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcluiInscricaoComponent } from './conclui-inscricao.component';

describe('ConcluiInscricaoComponent', () => {
  let component: ConcluiInscricaoComponent;
  let fixture: ComponentFixture<ConcluiInscricaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConcluiInscricaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcluiInscricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
