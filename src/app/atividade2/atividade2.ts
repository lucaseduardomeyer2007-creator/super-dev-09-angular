import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atividade2',
  imports: [FormsModule],
  templateUrl: './atividade2.html',
  styleUrl: './atividade2.scss',
})
export class Atividade2 {

nota1 = signal<number | null>(null);
nota2 = signal<number | null>(null);
nota3 = signal<number | null>(null);

  calcularMedia(): void {
  
      if(this.nota1() ===null || this.nota2()===null || this.nota3() ===null){
      alert("Preencha o campo vazio");
      return;
    }


    const calculoMedia = (this.nota1()! + this.nota2()! + this.nota3()!) / 3;

    if(calculoMedia >= 6){
      alert("aprovado");
    } else {
      alert("Aluno Reprovado");
    }
    
    alert("A média geral das notas é " + calculoMedia);

}
}

