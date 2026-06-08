import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {BoasVindas} from './boas-vindas/boas-vindas';
import {CidadeBlumenau} from './cidade-blumenau/cidade-blumenau';
import {CidadeIndaial} from './cidade-indaial/cidade-indaial';
import {Comidas} from './comidas/comidas';
import {Carros} from './carros/carros';
import {Filmes} from './filmes/filmes';
import {Navbar} from './navbar/navbar';
import {Atividade1} from './atividade1/atividade1';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, BoasVindas, CidadeBlumenau, CidadeIndaial, Comidas, Carros, Filmes, Navbar, Atividade1],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('escola-ng');
}
