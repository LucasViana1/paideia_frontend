import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoalComponent } from './pessoal.component';

describe('PessoalComponent', () => {
  let component: PessoalComponent;
  let fixture: ComponentFixture<PessoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
