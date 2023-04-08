import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ObservableServiceComponent } from './observable-service/observable-service.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { JsonServerComponent } from './json-server/json-server.component';
import { IntercepterComponent } from './intercepter/intercepter.component'
import { ShowIconInterceptor } from './show-icon.interceptor';

@NgModule({
  declarations: [AppComponent, SigninComponent, ReactiveFormComponent, ObservableServiceComponent, JsonServerComponent, IntercepterComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,HttpClientModule],
  providers: [
    {provide:HTTP_INTERCEPTORS,
      useClass:ShowIconInterceptor,
      multi:true}
  ],
  bootstrap: [AppComponent],



})



export class AppModule {}
