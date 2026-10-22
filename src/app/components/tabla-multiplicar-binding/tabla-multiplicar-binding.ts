import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabla-multiplicar-binding',
  standalone: false,
  styleUrl: './tabla-multiplicar-binding.css',
  templateUrl: './tabla-multiplicar-binding.html',
})
export class TablaMultiplicarBinding {
  public items!: Array<number>;
  public numeroIntroducido: number = 0;

  constructor(
    private _activeRoute: ActivatedRoute,
  ) {
    this._activeRoute.params.subscribe((params) => {
      this.numeroIntroducido = + params['numero'];
    });
    this.generarTabla(this.numeroIntroducido);
  }

  generarTabla(numero: number): void {
    this.items = [];
    for (let i = 1; i <= 10; i++) {
      this.items.push(numero * i);
    }
  }


}
