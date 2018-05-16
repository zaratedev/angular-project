import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'title',
  templateUrl: 'title.component.html'
})
export class TitleComponent implements OnInit{
  public name : string;
  public edad : number;
  public edades : number[];

  constructor() {}

  // Se ejecuta cuando el componente ha sido inicializado
  ngOnInit() {
    this.name = 'Jonathan';
    this.edad = 24;
  }

  getEdadNombre() : string {
    return `${this.name} : ${this.edad}`;
  }
}
