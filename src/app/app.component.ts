import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { ModalComponent } from './modal/modal.component';
import { SpideyService } from './spidey.service';

export interface SpideyModel {
  issue: number,
  title: string,
  something: string,
  somethingElse: string
}

const fakeData: SpideyModel[] = [
  { issue: 1, title: 'title1', something: 'blah', somethingElse: 'blah' },
  { issue: 2, title: 'title2', something: 'blah', somethingElse: 'blah' },
  { issue: 3, title: 'title3', something: 'blah', somethingElse: 'blah' },
  { issue: 4, title: 'title4', something: 'blah', somethingElse: 'blah' },
  { issue: 5, title: 'title5', something: 'blah', somethingElse: 'blah' },
  { issue: 6, title: 'title6', something: 'blah', somethingElse: 'blah' },
  { issue: 7, title: 'title7', something: 'blah', somethingElse: 'blah' },
  { issue: 8, title: 'title8', something: 'blah', somethingElse: 'blah' },
  { issue: 9, title: 'title9', something: 'blah', somethingElse: 'blah' },
  { issue: 10, title: 'title10', something: 'blah', somethingElse: 'blah' },
  { issue: 11, title: 'title11', something: 'blah', somethingElse: 'blah' },
  { issue: 12, title: 'title12', something: 'blah', somethingElse: 'blah' },
  { issue: 13, title: 'title13', something: 'blah', somethingElse: 'blah' }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'The Ultimate Spiderman!';
  displayedColumns: string[] = ['issue', 'name', 'details']
  spideyData: Array<any> = []
  dataSource = new MatTableDataSource(this.spideyData)

  constructor(private _dialog: MatDialog, private _spideyService: SpideyService) { }

  @ViewChild(MatSort) sort: MatSort

  ngOnInit() { 
    this.onGetFirstSpidey()    
    // this.onGetSecondSpidey()    
    this.dataSource.sort = this.sort
  }

  onGetFirstSpidey() : void {
    this._spideyService.getSpidey1().subscribe(Spidey => {
      this.spideyData = Spidey.data.results[0].comics.items
      console.log(this.spideyData)
    })
  }

  // onGetSecondSpidey() : void {
  //   this._spideyService.getSpidey2().subscribe(Spidey => {
  //     this.spideyData = Spidey.data.results[0]
  //     console.log(this.spideyData)
  //   })
  // }

  openDialog(element) {
    this._dialog.open(ModalComponent, { data: element })
    console.log(element)
  }
}