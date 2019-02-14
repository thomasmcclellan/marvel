import { Component, OnInit, ViewChild, Input } from '@angular/core';
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
  superData: TableModel[] = []
  dataSource: any
  pageSizeOptions: number[] = [7]

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

  onSetBackground() : string {
    let background: string
    switch (this.title.toLowerCase()) {
      case 'spider-man': 
        background = 'url(../assets/img/spidey.jpg) no-repeat right center / cover'
        break
      case 'x-men':
        background = 'url(../assets/img/x.jpg) no-repeat center center / cover'
        break
      case 'captain america':
        background = 'url(../assets/img/captain.jpg) no-repeat center center / cover'
        break
      case 'iron man':
        background = 'url(../assets/img/iron.jpg) no-repeat center center / cover'
        break
      case 'fantastic four':
        background = 'url(../assets/img/fantastic.jpg) no-repeat center center / cover'
        break
      case 'hulk':
        background = 'url(../assets/img/hulk.jpg) no-repeat center 58% / cover'
        break
      case 'black panther':
        background = 'url(../assets/img/panther.jpg) no-repeat center center / cover'
        break
    }
    return background
  }

  onGetSuper(hero: string) : void {
    this._marvelService.getSuper(hero.toLowerCase())
    .subscribe(Super => {
      this.superData = []

      Super['data'].results.map(data => data.comics.items.map(comic => this.superData.push(comic)))

      this.dataSource = new MatTableDataSource(this.superData)
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