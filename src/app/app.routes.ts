import { Routes } from '@angular/router';
import {CidadeBlumenau} from './cidade-blumenau/cidade-blumenau';
import {CidadeIndaial} from './cidade-indaial/cidade-indaial';
import {Carros} from './carros/carros';
import {Filmes} from './filmes/filmes';
import {Comidas} from './comidas/comidas';
import {FormCamposBasico} from './form-campos-basico/form-campos-basico';
import {Atividade1} from './atividade1/atividade1';

export const routes: Routes = [
{path: "cidade/blumenau", loadComponent: () => CidadeBlumenau},
{path: "cidade/indaial", loadComponent: () => CidadeIndaial},
{path: "carros", loadComponent: () => Carros},
{path: "filmes", loadComponent: () => Filmes},
{path: "comidas", loadComponent: () => Comidas},
{path: "formulario/campos-basico", loadComponent: () => FormCamposBasico},
{path: "atividade1", loadComponent: () => Atividade1},
];


