import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-component',
  standalone: false,
  styleUrl: './home-component.css',
  templateUrl: './home-component.html',
})
export class HomeComponent {
  public numero!: Number;

  constructor(private _router: Router) {}

  goDoble(number: Number): void {
    this.numero = number;
    this._router.navigate(['/doble/', this.numero]);
  }
}
