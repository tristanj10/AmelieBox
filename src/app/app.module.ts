import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ConceptComponent } from './concept/concept.component';
import { ContactComponent } from './contact/contact.component';

import { routing } from './app.routing';
import { AccueilComponent } from './accueil/accueil.component';
import { AbonnementComponent } from './abonnement/abonnement.component';
import { MagasinComponent } from './magasin/magasin.component';
import { CarouselComponent } from './accueil/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    ConceptComponent,
    ContactComponent,
    AccueilComponent,
    AbonnementComponent,
    MagasinComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
