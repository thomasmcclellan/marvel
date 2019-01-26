import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatDialog } from '@angular/material';
import { ModalComponent } from './modal/modal.component';

export interface SpideyModel {
  issue: number,
  title: string,
  something: string,
  somethingElse: string
}

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion'
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
  title = 'The Ultimate Spiderman!';
  displayedColumns: string[] = ['issue', 'title', 'details']
  dataSource = new MatTableDataSource(fakeData)

  constructor(public dialog: MatDialog) { }

  @ViewChild(MatSort) sort: MatSort

  ngOnInit() { 
    this.dataSource.sort = this.sort
  }

  openDialog(element) {
    this.dialog.open(ModalComponent, { data: element })
    console.log(element)
  }
}