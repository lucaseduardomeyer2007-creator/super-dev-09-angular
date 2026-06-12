import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtividadeTreino } from './atividade-treino';

describe('AtividadeTreino', () => {
  let component: AtividadeTreino;
  let fixture: ComponentFixture<AtividadeTreino>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtividadeTreino],
    }).compileComponents();

    fixture = TestBed.createComponent(AtividadeTreino);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
