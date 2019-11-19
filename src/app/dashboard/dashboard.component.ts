import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SohoHomePageComponent } from 'ids-enterprise-ng';
import { DashboardService } from '../services/dashboard.service';
import { Select, Store } from '@ngxs/store';
import { DogState } from '../store/dog.state';
import { Observable } from 'rxjs';
import { Dog, dogStatus } from '../model/dog.model';
import { Dogs } from '../store/dog.action';

import { SohoModalDialogService } from 'ids-enterprise-ng';
import { EditModalDialogComponent } from '../edit-modal-dialog/edit-modal-dialog.component';

//import { ExampleModalDialogComponent} from './edit-modal-dialog.component';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @Select(DogState.getAllDogs) dogs$: Observable<Dog[]>;
  @ViewChild(SohoHomePageComponent, { static: true }) homepage: SohoHomePageComponent;
  @ViewChild('dialogPlaceholder', { read: ViewContainerRef, static: true })
  placeholder: ViewContainerRef;

  public closeResult: string;

  public title = 'Edit';
  public isAlert = false;

  /**
  * Constructor.
  *
  * @param dialogService - the modal dialog service.
  */
    constructor(private myDashboardService:DashboardService, private store:Store, private modalService: SohoModalDialogService) {
    
    }
  ngOnInit() {  
    this.myDashboardService.emptyDashboard();
    for(let i=0;i<20;i++){
    this.myDashboardService.loadDog();
    }
    if(localStorage.getItem('favDogs')!=null){
    this.favdogs=JSON.parse(localStorage.getItem('favDogs'));
    }
  }

  favdogs:Dog[]=[];
  myDog:Dog;
  liked(likeddog:Dog){
    this.myDog={...likeddog};
    this.myDog.likeStatus="UNLIKE";
    this.favdogs.push(this.myDog);
    localStorage.setItem('favDogs',JSON.stringify(this.favdogs));
    this.favdogs.forEach(val=>this.store.dispatch(new Dogs.addToFav(val)));
  }
  

  editDog:Dog;
  edit(dog:Dog){
    const dialogRef = this.modalService
      .modal<EditModalDialogComponent>(EditModalDialogComponent, this.placeholder)
      .buttons([
        {
          id: 'cancel-button',
          text: Soho.Locale.translate('Cancel'),
          click: (e, modal) => { modal.isCancelled = true; dialogRef.close('CANCEL'); }
        },
        {
          text: 'Submit', click: (e, modal) => {
            dialogRef.close('SUBMIT');
          }, isDefault: true
        }])
      .title(this.title)
      .isAlert(this.isAlert)
      .apply((dialogComponent) => { dialogComponent.model.name = dog.name; dialogComponent.model.breed=dog.breed;
      dialogComponent.model.description=dog.description; dialogComponent.model.likeStatus=dog.likeStatus })
      .open();

     dialogRef.afterClose((result, ref, dialogComponent) => {
      this.editDog={...dog};
      this.editDog.name=dialogComponent.name;
      this.editDog.breed=dialogComponent.breed;
      this.editDog.description=dialogComponent.description;
      this.editDog.likeStatus=dialogComponent.model.likeStatus;
      if(this.editDog.likeStatus==="UNLIKE"){
        this.liked(this.editDog);
      }
      else{
        this.store.dispatch(new Dogs.edit(this.editDog));
      }
      this.closeResult = result;
    });

  } 



}




