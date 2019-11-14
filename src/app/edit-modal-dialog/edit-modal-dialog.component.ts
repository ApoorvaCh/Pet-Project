import { Component, OnInit } from '@angular/core';
import { Dog } from '../model/dog.model';
import { Store } from '@ngxs/store';
import { Dogs } from '../store/dog.action';

@Component({
  selector: 'app-edit-modal-dialog',
  templateUrl: './edit-modal-dialog.component.html',
  styleUrls: ['./edit-modal-dialog.component.css']
})
export class EditModalDialogComponent implements OnInit {

  constructor(private store:Store) { }

  ngOnInit() {
  }

  public model = {
    name: '',
    breed: '',
    description:'',
    likeStatus:''
   };

   name:string;
   breed:string;
   description:string;
   likeStatus:string=this.model.likeStatus;

   favdogs:Dog[]=[];
   myDog:Dog;
   like(){
     console.log(this.model.likeStatus)
     if(this.model.likeStatus=="LIKE"){
      this.model.likeStatus="UNLIKE";
     }
     else if(this.model.likeStatus=="UNLIKE"){
       this.model.likeStatus="LIKE";
     }

   }


   
}
