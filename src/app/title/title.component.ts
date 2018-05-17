import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: 'title.component.html',
  styleUrls: ['title.component.css']
})
export class TitleComponent implements OnInit{
  public name : string;
  public edad : number;
  public isAvailable : boolean = true;
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
