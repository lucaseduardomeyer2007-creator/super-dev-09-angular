import { Routes } from '@angular/router';
import {CidadeBlumenau} from './cidade-blumenau/cidade-blumenau';
import {CidadeIndaial} from './cidade-indaial/cidade-indaial';
import {Carros} from './carros/carros';
import {Filmes} from './filmes/filmes';
import {Comidas} from './comidas/comidas';
import {FormCamposBasico} from './form-campos-basico/form-campos-basico';
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
import { ProdutoCadastrar } from './produtos/produto-cadastrar/produto-cadastrar';
import { ProdutoListar } from './produtos/produto-listar/produto-listar';
import { ProdutoEditar } from './produtos/produto-editar/produto-editar';
import { ClienteCadastrar } from './clientes/cliente-cadastrar/cliente-cadastrar';
import { ClienteEditar } from './clientes/cliente-editar/cliente-editar';
import { ClienteListar } from './clientes/cliente-listar/cliente-listar';
export const routes: Routes = [
{path: "cidade/blumenau", loadComponent: () => CidadeBlumenau},
{path: "cidade/indaial", loadComponent: () => CidadeIndaial},
{path: "carros", loadComponent: () => Carros},
{path: "filmes", loadComponent: () => Filmes},
{path: "comidas", loadComponent: () => Comidas},
{path: "formulario/campos-basico", loadComponent: () => FormCamposBasico},
{path: "atividade1", loadComponent: () => Atividade1},
{path: "atividade2", loadComponent: () => Atividade2},
{path: "atividade3", loadComponent: () => Atividade3},
{path: "atividade4", loadComponent: () => Atividade4},
{path: "atividade5", loadComponent: () => Atividade5},
{path: "atividade6", loadComponent: () => Atividade6},
{path: "atividade7", loadComponent: () => Atividade7},
{path: "atividade8", loadComponent: () => Atividade8},
{path: "atividade9", loadComponent: () => Atividade9},
{path: "atividade10", loadComponent: () => Atividade10},
{ path: "produtos/cadastrar", loadComponent: () => ProdutoCadastrar },
{ path: "produtos", loadComponent: () => ProdutoListar},
{ path: "produtos/editar/:id", loadComponent: () => ProdutoEditar},
{ path: "clientes/cadastrar", loadComponent: () => ClienteCadastrar},
{ path: "clientes/editar/:id", loadComponent: () => ClienteEditar},
{ path: "clientes", loadComponent: () => ClienteListar}
];


