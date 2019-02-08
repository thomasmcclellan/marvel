import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MarvelService } from './marvel.service';
import { MarvelInterceptor } from './marvel.interceptor';
import { MaterialModule } from './material/material.module';
import { BackgroundSizeDirective } from './background-size.directive';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    BackgroundSizeDirective,
  ],
  entryComponents: [ModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    HttpClient, 
    MarvelService, 
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: MarvelInterceptor, 
      multi: true 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
