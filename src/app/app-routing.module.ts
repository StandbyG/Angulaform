import { CreaeditaUniversityComponent } from './components/university/creaedita-university/creaedita-university.component';
import { UniversityComponent } from './components/university/university.component';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'universidades',
    component: UniversityComponent,
    children: [{ path: 'nuevo', component: CreaeditaUniversityComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
