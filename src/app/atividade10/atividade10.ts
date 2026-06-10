import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atividade10',
  imports: [FormsModule],
  templateUrl: './atividade10.html',
  styleUrls: ['./atividade10.scss']
})
export class Atividade10 {
  nome = signal<string>('');
  destino = signal<string>('');
  dias = signal<number | null>(null);
  hospedagem = signal<string>('');
  cafe = signal<boolean>(false);
  passeio = signal<boolean>(false);
  resumo = signal<string>('');

  calcularOrcamento(): void {
    const viajante = this.nome();
    const destinoEscolhido = this.destino();
    const qtdDias = this.dias();
    const tipoHospedagem = this.hospedagem();
    const incluirCafe = this.cafe();
    const incluirPasseio = this.passeio();
    if (!viajante || !destinoEscolhido || !qtdDias || qtdDias <= 0) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }
    if (!tipoHospedagem) {
      alert('Selecione uma hospedagem!');
      return;
    }

    let valorBase = 0;
    if (destinoEscolhido === 'praia') valorBase = 500;
    else if (destinoEscolhido === 'montanha') valorBase = 400;
    else if (destinoEscolhido === 'cidade') valorBase = 600;

    let diaria = 0;
    if (tipoHospedagem === 'simples') diaria = 100;
    else if (tipoHospedagem === 'luxo') diaria = 300;

    const valorCafe = incluirCafe ? 20 * qtdDias : 0;
    const valorPasseio = incluirPasseio ? 150 : 0;

    const total = valorBase + (diaria * qtdDias) + valorCafe + valorPasseio;

    const textoResumo = `Viajante: ${viajante}
Destino: ${destinoEscolhido}
Dias: ${qtdDias}
Hospedagem: ${tipoHospedagem}
Café da manhã: ${incluirCafe ? 'Sim' : 'Não'}
Passeio turístico: ${incluirPasseio ? 'Sim' : 'Não'}
Valor total: R$ ${total.toFixed(2)}`;

    this.resumo.set(textoResumo);

    // Alert final
    alert(textoResumo);
  }
}
