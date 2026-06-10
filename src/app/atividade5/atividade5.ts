import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atividade5',
  imports: [FormsModule],
  templateUrl: './atividade5.html',
  styleUrl: './atividade5.scss',
})
export class Atividade5 {
  nome = signal<string>('');
  peso = signal<number | null>(null);
  altura = signal<number | null>(null);
  resultado = signal<string>('');

  calcularIMC(): void {
    const nomePessoa = this.nome();
    const pesoPessoa = this.peso();
    const alturaPessoa = this.altura();


    if (!pesoPessoa || !alturaPessoa) {
      alert('Preencha peso e altura corretamente!');
      return;
    }

    if (alturaPessoa === 0) {
      alert('A altura não pode ser zero!');
      return;
    }
    const imc = pesoPessoa / (alturaPessoa * alturaPessoa);

  
    let classificacao = '';
    if (imc < 18.5) classificacao = 'Abaixo do peso';
    else if (imc < 24.9) classificacao = 'Peso normal';
    else if (imc < 29.9) classificacao = 'Sobrepeso';
    else classificacao = 'Obesidade';

    const textoResultado = `${nomePessoa}, seu IMC é ${imc.toFixed(2)} (${classificacao})`;

    this.resultado.set(textoResultado);
    alert(imc + classificacao)
  }
}
