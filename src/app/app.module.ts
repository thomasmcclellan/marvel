import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent, DialogData } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { 
  MatButtonModule, 
  MatSortModule, 
  MatTableModule, 
  MatDialogModule 
} from '@angular/material';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SpideyService } from './spidey.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
  ],
  entryComponents: [ModalComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSortModule, 
    MatTableModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [HttpClient, SpideyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
