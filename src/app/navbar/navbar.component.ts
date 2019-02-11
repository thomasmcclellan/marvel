import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() 
  onSuperSelected = new EventEmitter<string>()
  
  supers: string[] = ['Spider-Man', 'X-Men', 'Captain America', 'Iron Man', 'Fantastic Four', 'Hulk', 'Black Panther']

  constructor() { }

  ngOnInit() {
  }

  pickSuper(title: string) : void {
    console.log(title)
    this.onSuperSelected.emit(title)
  }

}
