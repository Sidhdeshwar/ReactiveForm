import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ObservableServiceComponent } from './observable-service/observable-service.component';
import { JsonServerComponent } from './json-server/json-server.component';
import { IntercepterComponent } from './intercepter/intercepter.component';

const routes: Routes = [
  {
    path : 'jsonServer',
    component:JsonServerComponent
  },
  {
    path: 'signin',
    component : SigninComponent
  },
  {
    path: 'reactiveForm',
    component : ReactiveFormComponent
  },
  {
    path:'observableService',
    component:ObservableServiceComponent
  },
  {
    path:'intercepter',
    component: IntercepterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
