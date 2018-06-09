import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// import { LogInComponent } from './log-in/log-in.component';
import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';
import { LogModule } from './log-in/log.modul';

@NgModule({
  declarations: [
    AppComponent,
    // LogInComponent
  ],
  imports: [
    BrowserModule,
    LogModule,
    MainModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
