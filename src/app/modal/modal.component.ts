import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input()
  NgStyle: { [key: string] : string }
  
  _deets: object = {}

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this._deets = this.data
    console.log(this._deets['characters'].items)
  }

  onGetBackground() {
    return `url(${this._deets['thumbnail'].path}/portrait_incredible.jpg) no-repeat center center`
  }
}