import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Atividade1 } from './atividade1';

describe('Atividade1', () => {
  let component: Atividade1;
  let fixture: ComponentFixture<Atividade1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Atividade1],
    }).compileComponents();

    fixture = TestBed.createComponent(Atividade1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
