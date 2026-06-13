import { Component, signal } from '@angular/core';
import { clienteModel } from '../../models/cliente.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente-cadastrar',
  imports: [FormsModule],
  templateUrl: './cliente-cadastrar.html',
  styleUrl: './cliente-cadastrar.scss',
})
export class ClienteCadastrar {
  cliente = signal<clienteModel>({
    id: crypto.randomUUID(),
    nome: "",
    email: "",
    telefone: null
  })

  cadastrar(): void {
    const clientes = this.carregarClientesdoLocalStorage();

    clientes.push(this.cliente());

    const clienteString = JSON.stringify(clientes);
    localStorage.setItem("clientes", clienteString)

    alert("Cliente cadastrado com sucesso");
  }

  carregarClientesdoLocalStorage(): clienteModel[] {
    const clientesString = localStorage.getItem("clientes");

    if (clientesString === null) {
      return [];
    }

    return JSON.parse(clientesString) as clienteModel[];

  }





}
