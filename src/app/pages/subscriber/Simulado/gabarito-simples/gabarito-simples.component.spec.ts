import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GabaritoSimplesComponent } from './gabarito-simples.component';

describe('GabaritoSimplesComponent', () => {
  let component: GabaritoSimplesComponent;
  let fixture: ComponentFixture<GabaritoSimplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GabaritoSimplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GabaritoSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
