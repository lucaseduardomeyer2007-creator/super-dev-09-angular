import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { clienteModel } from '../../models/cliente.model';

@Component({
  selector: 'app-cliente-listar',
  imports: [RouterLink],
  templateUrl: './cliente-listar.html',
  styleUrl: './cliente-listar.scss',
})
export class ClienteListar {

  clientes = signal<clienteModel[]>([]);

  ngOnInit() {
    // chamar a função que carrega os produtos do LocalStorage
    this.carregarClientes();
  }

  carregarClientes(): void {
    // Carregando do localStorage os produtos
    const clientesString = localStorage.getItem("clientes");
    if (clientesString === null) {
      return;
    }

    const clientesLista = JSON.parse(clientesString) as clienteModel[];

    const clientesOrdenados = clientesLista.sort((x, y) => x.nome.localeCompare(y.nome))

    this.clientes.set(clientesOrdenados);
  }

  apagar(id: string): void {

    let confirmacao = confirm("Deseja realmente apagar este cliente?")
    if(confirmacao ==false){
      return;
    }



    this.clientes.update(clientes => clientes.filter(x => x.id == id))
    const clientesString = JSON.stringify(this.clientes());
    localStorage.setItem("clientes", clientesString);
  }
  



}