import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaProfessoresComponent } from './tela-professores.component';

describe('TelaProfessoresComponent', () => {
  let component: TelaProfessoresComponent;
  let fixture: ComponentFixture<TelaProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaProfessoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
