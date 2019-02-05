import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { ModalComponent } from './modal/modal.component';
import { SpideyService } from './spidey.service';
import { SpideyModel } from './spidey.model';
import { environment } from '../environments/environment.prod';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'The Ultimate Spiderman!';
  displayedColumns: string[] = ['name', 'details']
  spideyData: SpideyModel[] = []
  dataSource: any
  
  constructor(
    private _dialog: MatDialog,
    private _spideyService: SpideyService
  ) { }
  
  @ViewChild(MatSort) sort: MatSort
  
  ngOnInit() { 
    this.onGetFirstSpidey()  
    console.log(environment.creds)
  }
  
  onGetFirstSpidey() : void {
    this._spideyService.getSpidey1()
      .subscribe(Spidey => {
        this.spideyData = Spidey['data'].results[0].comics.items
        this.dataSource = new MatTableDataSource(this.spideyData)
        this.dataSource.sort = this.sort
      }
    )
  }

  openDialog(element) {
    this._spideyService.getSpideyDeets(element.resourceURI)
      .subscribe(Deets => {
        this._dialog.open(ModalComponent, { data: Deets['data'].results[0], width: '40vw' })
      }
    )
  }
}