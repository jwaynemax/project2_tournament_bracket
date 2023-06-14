import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BraketsComponent } from './tournament/brakets/brakets.component';
import { RegistrationComponent } from './tournament/registration/registration.component';
import { HelloComponent } from './tournament/hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    BraketsComponent,
    RegistrationComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
