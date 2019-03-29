import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() 
  onSuperSelected = new EventEmitter<string>()

  mobile: boolean = false
  supers: string[] = [
    'Spider-Man', 
    'X-Men', 
    'Captain America', 
    'Iron Man', 
    'Fantastic Four', 
    'Hulk', 
    'Black Panther'
  ]

  constructor() { }

  ngOnInit() {
    document.body.offsetWidth <= 1200 ? this.mobile = true : this.mobile = false
  }

  pickSuper(title: string) : void {
    this.onSuperSelected.emit(title)
  }
}