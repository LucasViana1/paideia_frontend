import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocioeconomicoComponent } from './socioeconomico.component';

describe('SocioeconomicoComponent', () => {
  let component: SocioeconomicoComponent;
  let fixture: ComponentFixture<SocioeconomicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocioeconomicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocioeconomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
