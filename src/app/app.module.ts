import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './about/about.component';
import { CvComponent } from './cv/cv.component';
import { ProgComponent } from './prog/prog.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CvComponent,
    ProgComponent,
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
