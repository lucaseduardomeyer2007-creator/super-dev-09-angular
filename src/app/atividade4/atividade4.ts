import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atividade4',
  imports: [FormsModule],
  templateUrl: './atividade4.html',
  styleUrl: './atividade4.scss',
})
export class Atividade4 {



  nome = signal<string>("")
  preco = signal<number | null>(null)
  quantidade = signal<number | null>(null)
  resultado = signal<string>("")

  calcularTotal(): void {

    const calcularValorTotal = (this.preco()! * this.quantidade()!);

    const apresentarResultado: string = `${this.nome()} ${calcularValorTotal}`
    this.resultado.set(apresentarResultado);



    alert(calcularValorTotal)

  }

}
