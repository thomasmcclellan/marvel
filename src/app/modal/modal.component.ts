import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  _deets: object = {}

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this._deets = this.data
  }

  onGetBackground() : string {
    return `url(${this._deets['thumbnail'].path}/portrait_incredible.jpg) no-repeat center center`
  }
}