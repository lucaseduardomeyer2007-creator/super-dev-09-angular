import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atividade-treino',
  imports: [FormsModule],
  templateUrl: './atividade-treino.html',
  styleUrl: './atividade-treino.scss',
})
export class AtividadeTreino {

nome = signal<string>("")
sobrenome = signal<string>("")
idade = signal<number | null>(null)
escolha = signal<string>("")



fazerViagem() : void {

const campoNome = this.nome();
const campoSobrenome = this.sobrenome();
const campoIdade = this.idade();
const campoEscolha = this.escolha();

const apresentarTudo  = `Nome: ${campoNome} Sobrenome : ${campoSobrenome} Idade: ${campoIdade} Escolha: ${campoEscolha}`


alert(apresentarTudo)
}


}

