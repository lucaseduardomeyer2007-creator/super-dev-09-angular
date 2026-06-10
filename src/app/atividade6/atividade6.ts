import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atividade6',
  imports: [FormsModule],
  templateUrl: './atividade6.html',
  styleUrls: ['./atividade6.scss']
})
export class Atividade6 {
  nome = signal<string>('');
  tamanho = signal<string>('');
  quantidade = signal<number | null>(null);
  bordaRecheada = signal<boolean>(false);
  resumo = signal<string>('');

  calcularPedido(): void {
    const cliente = this.nome();
    const tamanhoPizza = this.tamanho();
    const qtd = this.quantidade();
    const borda = this.bordaRecheada();


    if (!cliente || !tamanhoPizza || !qtd || qtd <= 0) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    let precoBase = 0;
    if (tamanhoPizza === 'pequena') precoBase = 20;
    else if (tamanhoPizza === 'media') precoBase = 30;
    else if (tamanhoPizza === 'grande') precoBase = 40;

    const valorBorda = borda ? 5 : 0;


    const total = (precoBase + valorBorda) * qtd;

    const textoResumo = `Cliente: ${cliente}
    Pedido: ${qtd} pizza(s) ${tamanhoPizza}${borda ? ' com borda recheada' : ''}
    Total: R$ ${total.toFixed(2)}`;

    this.resumo.set(textoResumo);

    alert(textoResumo);
  }
}
