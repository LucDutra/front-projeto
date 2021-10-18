import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunoEspecificoComponent } from './aluno-especifico.component';

describe('AlunoEspecificoComponent', () => {
  let component: AlunoEspecificoComponent;
  let fixture: ComponentFixture<AlunoEspecificoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunoEspecificoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunoEspecificoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
