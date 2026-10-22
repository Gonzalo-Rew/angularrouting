import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MusicaComponent } from './components/musica-component/musica-component';
import { CineComponent } from './components/cine-component/cine-component';
import { NotFoundComponent } from './components/not-found-component/not-found-component';
import { appRoutingProviders } from './app.routing';
import { routing } from './app.routing';
import { MenuComponent } from './components/menu-component/menu-component';
import { NumeroDobleComponent } from './components/numero-doble-component/numero-doble-component';
import { TablaMultiplicarBinding } from './components/tabla-multiplicar-binding/tabla-multiplicar-binding';
import { MenuMultiplicar } from './components/menu-multiplicar/menu-multiplicar';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MusicaComponent,
    CineComponent,
    NotFoundComponent,
    MenuComponent,
    NumeroDobleComponent,
    TablaMultiplicarBinding,
    MenuMultiplicar,
  ],
  imports: [BrowserModule, routing],
  providers: [provideBrowserGlobalErrorListeners(), appRoutingProviders],
  bootstrap: [App],
})
export class AppModule {}
