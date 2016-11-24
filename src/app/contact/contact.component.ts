import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public nom : string;
  private mail : string;
  private message : string;

  constructor() { 
    
  }

  ngOnInit() {
    this.nom = "";
    this.mail = "";
    this.message = "";
  }

  onClick(nom, mail, message){
    if (nom != "" && mail != "" && message != ""){
      this.nom = nom;
      this.mail = mail;
      this.message = message;
    }else{
      alert("Tu fou ma gueule ?!");
    }
  }

}
