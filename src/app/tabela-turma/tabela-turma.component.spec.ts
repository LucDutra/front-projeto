import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaTurmaComponent } from './tabela-turma.component';

describe('TabelaTurmaComponent', () => {
  let component: TabelaTurmaComponent;
  let fixture: ComponentFixture<TabelaTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaTurmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
