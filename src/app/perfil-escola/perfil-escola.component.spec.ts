import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEscolaComponent } from './perfil-escola.component';

describe('PerfilEscolaComponent', () => {
  let component: PerfilEscolaComponent;
  let fixture: ComponentFixture<PerfilEscolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilEscolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
