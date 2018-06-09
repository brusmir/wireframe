import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LogInComponent } from './log-in.component';
import { LogService } from './service/log.service';

@NgModule({
  declarations: [
    LogInComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LogService],
})
export class LogModule { }
