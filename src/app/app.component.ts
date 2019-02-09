import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog, MatPaginator } from '@angular/material';
import { ModalComponent } from './modal/modal.component';
import { MarvelService } from './marvel.service';
import { TableModel } from './table.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string =  'Spider-Man'.toUpperCase()
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
    this.onGetSuper(this.title)  
  }
  
  onSetTitle(title: string) : void {
    this.title = title.toUpperCase()
    this.onGetSuper(title)  
  }

  onGetSuper(hero: string) : void {
    this._marvelService.getSuper(hero.toLowerCase())
    .subscribe(Spidey => {
      this.spideyData = []
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

  openDialog(selectedComic) {
    this._marvelService.getSuperDeets(selectedComic.resourceURI)
      .subscribe(Deets => {
        this._dialog.open(ModalComponent, { 
          data: Deets['data'].results[0], 
          width: '40vw' 
        })
      }
    )
  }
}