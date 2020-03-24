import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimuladoDownloadModelosComponent } from './simulado-download-modelos.component';

describe('SimuladoDownloadModelosComponent', () => {
  let component: SimuladoDownloadModelosComponent;
  let fixture: ComponentFixture<SimuladoDownloadModelosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimuladoDownloadModelosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimuladoDownloadModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
