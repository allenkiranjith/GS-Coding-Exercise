import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssessmentComponent } from './assessment';

const routes: Routes = [
  { path: '', redirectTo: 'assessment', pathMatch: 'full'},
  { path: 'assessment', component: AssessmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
