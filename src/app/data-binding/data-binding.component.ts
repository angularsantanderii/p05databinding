import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  actor: any = {
    apellidos: 'De Niro',
    nombre: 'Robert',
    fechaNacimiento: new Date(1943, 7, 17)
  }

  constructor() { }

  ngOnInit(): void {
  }

  getEdad(): number {
    const edad: number = (new Date().getTime() - this.actor.fechaNacimiento.getTime()) / (365 * 24 * 60 * 60 * 1000);
    return Math.ceil(edad);
  }

}
