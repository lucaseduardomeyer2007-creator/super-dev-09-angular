import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atividade2',
  imports: [FormsModule],
  templateUrl: './atividade2.html',
  styleUrl: './atividade2.scss',
})
export class Atividade2 {
  // Signals para armazenar as notas
  nota1 = signal<number | null>(null);
  nota2 = signal<number | null>(null);
  nota3 = signal<number | null>(null);

  calcularMedia() {
    // Validação: todas as notas precisam estar preenchidas
    if (this.nota1() === null || this.nota2() === null || this.nota3() === null) {
      alert('Preencha todas as notas!');
      return;
    }

    const media = (this.nota1()! + this.nota2()! + this.nota3()!) / 3;

    // Verifica aprovação
    const status = media >= 7 ? 'Aprovado' : 'Reprovado';

    alert(`Média: ${media.toFixed(2)} - ${status}`);
  }
}