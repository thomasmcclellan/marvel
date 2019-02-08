import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator } from '@angular/material';
import { ModalComponent } from './modal/modal.component';
import { MarvelService } from './marvel.service';
import { TableModel } from './table.model';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'fantastic four'.toUpperCase()
  displayedColumns: string[] = ['name', 'details']
  spideyData: TableModel[] = []
  dataSource: any
  pageSizeOptions: number[] = [10]
  
  constructor(
    private _dialog: MatDialog,
    private _marvelService: MarvelService
  ) { }
  
  @ViewChild(MatSort) sort: MatSort
  @ViewChild(MatPaginator) paginator: MatPaginator
  
  ngOnInit() { 
    this.onGetFirstSpidey()  
    console.log(environment.creds)
  }
  
  // onGetFirstSpidey() : void {
  //   this._marvelService.getSpidey(466)
  //   .subscribe(Spidey => {
  //     this.spideyData = Spidey['data'].results[0].comics.items
  //     this.dataSource = new MatTableDataSource(this.spideyData)
  //     this.dataSource.sort = this.sort
  //     this.dataSource.paginator = this.paginator
  //     this.title = Spidey['data'].results[0].title.toUpperCase()
  //     }
  //   )
  // }

  onGetFirstSpidey() : void {
    this._marvelService.getSpidey(this.title.toLowerCase())
    .subscribe(Spidey => {
      for (let data of Spidey['data'].results) {
        for (let comic of data.comics.items) {
          this.spideyData.push(comic)
        }
      }
      this.dataSource = new MatTableDataSource(this.spideyData)
      this.dataSource.sort = this.sort
      this.dataSource.paginator = this.paginator
      }
    )
  }

  openDialog(element) {
    this._marvelService.getSpideyDeets(element.resourceURI)
      .subscribe(Deets => {
        this._dialog.open(ModalComponent, { data: Deets['data'].results[0], width: '40vw' })
      }
    )
  }
}