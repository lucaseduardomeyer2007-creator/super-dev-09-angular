import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-atividade9',
  imports: [FormsModule],
  templateUrl: './atividade9.html',
  styleUrls: ['./atividade9.scss']
})
export class Atividade9 {
  nome = signal<string>('');
  email = signal<string>('');
  senha = signal<string>('');
  confirmarSenha = signal<string>('');
  resultado = signal<string>('');

  cadastrar(): void {
    const nomeUsuario = this.nome();
    const emailUsuario = this.email();
    const senhaUsuario = this.senha();
    const confirmarSenhaUsuario = this.confirmarSenha();

    if (!nomeUsuario || !emailUsuario || !senhaUsuario || !confirmarSenhaUsuario) {
      alert('Preencha todos os campos!');
      return;
    }

    if (senhaUsuario !== confirmarSenhaUsuario) {
      alert('As senhas não coincidem!');
      return;
    }

    const mensagem = `Cadastro realizado com sucesso!
Nome: ${nomeUsuario}
Email: ${emailUsuario}`;
    
    this.resultado.set(mensagem);

    alert(mensagem);
  }
}
