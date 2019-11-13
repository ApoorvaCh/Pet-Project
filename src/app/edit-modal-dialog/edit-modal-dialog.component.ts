import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-modal-dialog',
  templateUrl: './edit-modal-dialog.component.html',
  styleUrls: ['./edit-modal-dialog.component.css']
})
export class EditModalDialogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public model = {
    name: '',
    breed: '',
    description:'',
    likeStatus:''
   };
}
