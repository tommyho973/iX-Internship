import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AwayChilComponent } from './components/away-chil/away-chil.component';
import { AwayComponent } from './components/away/away.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { FormsModule } from '@angular/forms';
import { PostComponent } from './components/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    AwayChilComponent,
    AwayComponent,
    HomeComponent,
    NavbarComponent,
    PostComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
