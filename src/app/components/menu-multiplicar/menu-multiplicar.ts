import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-multiplicar',
  standalone: false,
  styleUrl: './menu-multiplicar.css',
  templateUrl: './menu-multiplicar.html',
})
export class MenuMultiplicar {

  public numeros: Array<Number>;
  private aux: Array<Number>;

  constructor() {
    this.numeros = new Array<Number>();
    this.aux = new Array<Number>();
    for (let i = 0; i < 5; i++) {
      this.aux.push(Math.floor(Math.random() * 10));
    }
    this.numeros = this.aux;
  }

}
