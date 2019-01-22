import { Component, OnInit } from '@angular/core';

export interface SpideyModel {
  issue: number,
  title: string
}

const fakeData: SpideyModel[] = [
  { issue: 1, title: 'title1' },
  { issue: 2, title: 'title2' },
  { issue: 3, title: 'title3' },
  { issue: 4, title: 'title4' },
  { issue: 5, title: 'title5' },
  { issue: 6, title: 'title6' },
  { issue: 7, title: 'title7' },
  { issue: 8, title: 'title8' },
  { issue: 9, title: 'title9' },
  { issue: 10, title: 'title10' },
  { issue: 11, title: 'title11' },
  { issue: 12, title: 'title12' },
  { issue: 13, title: 'title13' }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'The Ultimate Spiderman!';
  displayedColumns: string[] = ['issue', 'title', 'details']
  dataSource = fakeData

  ngOnInit() { }
}
