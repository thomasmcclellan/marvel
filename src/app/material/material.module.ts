import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSortModule, MatTableModule, MatDialogModule, MatPaginatorModule, MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatButtonModule,
    MatSortModule, 
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatToolbarModule
  ], 
  exports: [
    CommonModule, 
    MatButtonModule,
    MatSortModule, 
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
