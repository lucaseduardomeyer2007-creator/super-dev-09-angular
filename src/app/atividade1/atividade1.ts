import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-atividade1',
  imports: [FormsModule],
  templateUrl: './atividade1.html',
  styleUrl: './atividade1.scss',
})
export class Atividade1 {

nome = signal<string>("")
  sobrenome = signal<string>("");
  idade = signal<number | null>(null)
  resultadoNomeCompleto: string = "";

apresentarNomeCompleto(): void {
    // let nomeCompleto = this.nome() + " " + this.sobrenome();
    
    
    if (
  !this.nome() ||
  !this.sobrenome() ||
  this.idade() === null
) {
  alert("Um dos campos está vazio, preencha o campo");
  return;
}
  const nomeCompleto: string = `${this.nome()} ${this.sobrenome()} \ ${this.idade()} anos`;
    // alert(`Nome Completo: ${nomeCompleto}`);
    alert(nomeCompleto)
  }









}
