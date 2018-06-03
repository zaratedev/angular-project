import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: 'title.component.html',
  styleUrls: ['title.component.css']
})
export class TitleComponent implements OnInit{
  public name : string;
  public isAvailable : boolean = true;
  public moreInformation : boolean = false;
  public category : string;
  public topics : string[];

  constructor() {}

  // Se ejecuta cuando el componente ha sido inicializado
  ngOnInit() {
    this.category = 'web';
    this.name = 'Jonathan';
    this.topics = [
      'Fundamentos',
      'Componentes',
      'Directivas',
      'Animaciones',
      'RxJS'
    ]
  }
}
