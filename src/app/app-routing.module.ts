import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComponeComponent } from './compone/compone.component';
import { NewappComponent } from './newapp/newapp.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  { path: 'onecomp', component: NewappComponent },
  { path: 'twocomp', component: ComponeComponent },
  { path: 'list', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
