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
import {Atividade2} from './atividade2/atividade2';
import {Atividade3} from './atividade3/atividade3';
import {Atividade4} from './atividade4/atividade4';
import {Atividade5} from './atividade5/atividade5';
import {Atividade6} from './atividade6/atividade6';
import {Atividade7} from './atividade7/atividade7';
import {Atividade8} from './atividade8/atividade8';
import {Atividade9} from './atividade9/atividade9';
import {Atividade10} from './atividade10/atividade10';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, BoasVindas, CidadeBlumenau, CidadeIndaial, Comidas, Carros, Filmes, Navbar, Atividade1, 
    Atividade2, Atividade3, Atividade4, Atividade5, Atividade6, Atividade7, Atividade8, Atividade9, Atividade10],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('escola-ng');
}
