import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
//import { SavetagsComponent } from './savetags/savetags.component';
import { NoteCardsComponent } from './note-cards/note-cards.component';
import { NoteDetailsComponent } from './note-details/note-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NoteDetailsComponent,
  //  SavetagsComponent,
    NoteCardsComponent
  ],
  imports: [
    BrowserModule,
    
    AppRoutingModule,
    FormsModule  ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
