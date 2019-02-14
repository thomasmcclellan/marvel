import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatSortModule, MatTableModule, MatDialogModule, MatPaginatorModule, MatToolbarModule, MatMenuModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatButtonModule,
    MatSortModule, 
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ], 
  exports: [
    CommonModule, 
    MatButtonModule,
    MatSortModule, 
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class MaterialModule { }
