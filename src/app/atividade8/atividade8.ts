import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atividade8',
  imports: [FormsModule],
  templateUrl: './atividade8.html',
  styleUrls: ['./atividade8.scss']
})
export class Atividade8 {
  produto = signal<string>('');
  valor = signal<number | null>(null);
  regiao = signal<string>('');
  expressa = signal<boolean>(false);
  resumo = signal<string>('');

  calcularFrete(): void {
    const nomeProduto = this.produto();
    const valorProduto = this.valor();
    const regiaoEntrega = this.regiao();
    const entregaExpressa = this.expressa();

    if (!nomeProduto || !valorProduto || !regiaoEntrega) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }
  
    let frete = 0;
    if (regiaoEntrega === 'sul') frete = 20;
    else if (regiaoEntrega === 'sudeste') frete = 25;
    else if (regiaoEntrega === 'norte') frete = 40;
    else if (regiaoEntrega === 'nordeste') frete = 35;
    else if (regiaoEntrega === 'centro-oeste') frete = 30;

    const taxaExpressa = entregaExpressa ? 15 : 0;

    const total = valorProduto + frete + taxaExpressa;

    const textoResumo = `Produto: ${nomeProduto}
Valor: R$ ${valorProduto.toFixed(2)}
Região: ${regiaoEntrega}
Entrega expressa: ${entregaExpressa ? 'Sim' : 'Não'}
Total: R$ ${total.toFixed(2)}`;

    this.resumo.set(textoResumo);

    alert(textoResumo);
  }
}
