import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccueilComponent }      from './accueil/accueil.component';
import { ConceptComponent }      from './concept/concept.component';
import { AbonnementComponent }   from './abonnement/abonnement.component';
import { MagasinComponent }      from './magasin/magasin.component';
import { ContactComponent }      from './contact/contact.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'accueil',
        pathMatch: 'full'
    },
    {
      path: 'accueil',
      component: AccueilComponent 
  },
  {
    path: 'concept',
    component: ConceptComponent
  },
  {
      path: 'abonnement',
      component: AbonnementComponent 
  },
  {
      path: 'magasin',
      component: MagasinComponent 
  },
  {
      path: 'contact',
      component: ContactComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);