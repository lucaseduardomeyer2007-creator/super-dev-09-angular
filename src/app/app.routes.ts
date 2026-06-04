import { Routes } from '@angular/router';
import {CidadeBlumenau} from './cidade-blumenau/cidade-blumenau';
import {CidadeIndaial} from './cidade-indaial/cidade-indaial';
import {Carros} from './carros/carros';
import {Filmes} from './filmes/filmes';
import {Comidas} from './comidas/comidas';

export const routes: Routes = [
{path: "cidade/blumenau", loadComponent: () => CidadeBlumenau},
{path: "cidade/indaial", loadComponent: () => CidadeIndaial},
{path: "carros", loadComponent: () => Carros},
{path: "filmes", loadComponent: () => Filmes},
{path: "comidas", loadComponent: () => Comidas},
];


