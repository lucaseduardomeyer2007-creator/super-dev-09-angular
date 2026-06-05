import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {BoasVindas} from './boas-vindas/boas-vindas';
import {CidadeBlumenau} from './cidade-blumenau/cidade-blumenau';
import {CidadeIndaial} from './cidade-indaial/cidade-indaial';
import {Comidas} from './comidas/comidas';
import {Carros} from './carros/carros';
import {Filmes} from './filmes/filmes';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, BoasVindas, CidadeBlumenau, CidadeIndaial, Comidas, Carros, Filmes],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('escola-ng');
}
