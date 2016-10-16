import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConceptComponent }      from './concept/concept.component';
import { ContactComponent }      from './contact/contact.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/concept',
        pathMatch: 'full'
    },
  {
    path: 'concept',
    component: ConceptComponent
  },
  {
      path: 'contact',
      component: ContactComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);