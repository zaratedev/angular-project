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

  public css_classes : string[] = ['active', 'shadow'];

  constructor() {}

  // Se ejecuta cuando el componente ha sido inicializado
  ngOnInit() {
    this.name = 'Jonathan';
    this.edad = 24;

    setTimeout( () => {
      this.isAvailable = false;
    }, 3000)
  }

  getEdadNombre() : string {
    return `${this.name} : ${this.edad}`;
  }
}
