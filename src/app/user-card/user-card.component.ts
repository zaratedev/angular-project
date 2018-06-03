import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  public name : string;
  public username : string;
  public avatar : string;

  constructor() { }

  ngOnInit() {
    this.name = "Jonathan";
    this.username = "zaratedev";
    this.avatar = "https://pickaface.net/gallery/avatar/alex.coder153a9244310a57.png";
  }

}
