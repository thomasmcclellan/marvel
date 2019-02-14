import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() 
  onSuperSelected = new EventEmitter<string>()

  mobile: boolean = false
  supers: string[] = ['Spider-Man', 'X-Men', 'Captain America', 'Iron Man', 'Fantastic Four', 'Hulk', 'Black Panther']

  constructor() { }

  ngOnInit() {
    console.log(window.screen.width, document.body.offsetWidth)
    document.body.offsetWidth <= 1200 ? this.mobile = true : this.mobile = false
    console.log(this.mobile)
    // const screenSizeChanged$ = fromEvent(window, 'resize').throttleTime(500).map(checkScreenSize);
    // this.isScreenSmall$ = screenSizeChanged$.pipe(startWith(checkScreenSize()))
  }

  pickSuper(title: string) : void {
    // console.log(title)
    this.onSuperSelected.emit(title)
  }

}
