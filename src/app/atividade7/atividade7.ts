import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atividade7',
  imports: [FormsModule],
  templateUrl: './atividade7.html',
  styleUrls: ['./atividade7.scss']
})
export class Atividade7 {
  nome = signal<string>('');
  plano = signal<string>('');
  periodo = signal<string>('');
  personal = signal<boolean>(false);
  resumo = signal<string>('');

  calcularPlano(): void {
    const aluno = this.nome();
    const planoEscolhido = this.plano();
    const periodoContrato = this.periodo();
    const personalTrainer = this.personal();

    // Validações
    if (!aluno) {
      alert('Preencha o nome do aluno!');
      return;
    }
    if (!planoEscolhido) {
      alert('Selecione um plano!');
      return;
    }
    if (!periodoContrato) {
      alert('Selecione o período do contrato!');
      return;
    }


    let valorBase = 0;
    if (planoEscolhido === 'basico') valorBase = 100;
    else if (planoEscolhido === 'intermediario') valorBase = 150;
    else if (planoEscolhido === 'premium') valorBase = 200;


    let multiplicador = 1;
    if (periodoContrato === 'mensal') multiplicador = 1;
    else if (periodoContrato === 'trimestral') multiplicador = 3;
    else if (periodoContrato === 'anual') multiplicador = 12;

    const valorPersonal = personalTrainer ? 50 : 0;


    const total = (valorBase + valorPersonal) * multiplicador;

    const textoResumo = `Aluno: ${aluno}
  Plano: ${planoEscolhido}
  Período: ${periodoContrato}
  Personal: ${personalTrainer ? 'Sim' : 'Não'}
  Valor total: R$ ${total.toFixed(2)}`;

    this.resumo.set(textoResumo);


    alert(textoResumo);
  }
}
