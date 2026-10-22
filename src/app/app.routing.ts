import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './components/home-component/home-component';
import { CineComponent } from './components/cine-component/cine-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { NumeroDobleComponent } from './components/numero-doble-component/numero-doble-component';
import { MenuMultiplicar } from './components/menu-multiplicar/menu-multiplicar';
import { TablaMultiplicarBinding } from './components/tabla-multiplicar-binding/tabla-multiplicar-binding';

const appRouter: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cine', component: CineComponent },
  { path: 'musica', component: MusicaComponent },
  { path: 'doble', component: NumeroDobleComponent },
  { path: 'doble/:numero', component: NumeroDobleComponent },
  { path: 'menu_multiplicar', component: MenuMultiplicar },
  { path: 'tabla_multiplicar/:numero', component: TablaMultiplicarBinding },
  { path: '**', component: NotFoundComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRouter);
