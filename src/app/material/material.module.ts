import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSortModule, MatTableModule, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatButtonModule,
    MatSortModule, 
    MatTableModule,
    MatDialogModule
  ], 
  exports: [
    CommonModule, 
    MatButtonModule,
    MatSortModule, 
    MatTableModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
