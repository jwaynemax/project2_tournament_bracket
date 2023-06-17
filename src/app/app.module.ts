import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './tournament/registration/registration.component';
import { HelloComponent } from './tournament/hello/hello.component';
import { BracketsComponent } from './tournament/brackets/brackets.component';
import { RosterService } from './services/roster-service.service';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HelloComponent,
    BracketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RosterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
