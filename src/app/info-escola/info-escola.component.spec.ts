import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoEscolaComponent } from './info-escola.component';

describe('InfoEscolaComponent', () => {
  let component: InfoEscolaComponent;
  let fixture: ComponentFixture<InfoEscolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoEscolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoEscolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
