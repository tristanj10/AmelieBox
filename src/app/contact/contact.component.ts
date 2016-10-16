import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public nom : string;
  private prenom : string;
  private mail : string;
  private message : string;

  constructor() { 
    
  }

  ngOnInit() {
    this.nom = " ";
    this.prenom = " ";
    this.mail = "";
    this.message = "";
  }

  onClick(nom, prenom, mail, message){
    if (nom != "" && prenom!=""){
      this.prenom = nom;
      this.nom = prenom;
    }else{
      alert("Tu fou ma gueule ?!");
    }
  }

}
