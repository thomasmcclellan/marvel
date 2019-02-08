import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSortModule, MatTableModule, MatDialogModule, MatPaginatorModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatButtonModule,
    MatSortModule, 
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule
  ], 
  exports: [
    CommonModule, 
    MatButtonModule,
    MatSortModule, 
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
