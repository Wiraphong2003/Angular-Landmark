import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './page/main/main.component';
import {MatListModule} from '@angular/material/list';
import { NewComponent } from './page/new/new.component'

import {MatDialogModule} from '@angular/material/dialog';
import { EditComponent } from './page/edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
