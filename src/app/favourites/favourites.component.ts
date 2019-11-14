import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SohoHomePageComponent } from 'ids-enterprise-ng';
import { Select, Store } from '@ngxs/store';
import { DogState } from '../store/dog.state';
import { Observable } from 'rxjs';
import { Dog } from '../model/dog.model';
import { Dogs } from '../store/dog.action';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SohoModalDialogService } from 'ids-enterprise-ng';
import { EditModalDialogComponent } from '../edit-modal-dialog/edit-modal-dialog.component';



@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {

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

  
  constructor( private store:Store, private modalService: SohoModalDialogService) {
   }

  @Select(DogState.getAllFavDogs)dogs$ : Observable<Dog[]>

  favDogs:Dog[]=[];
  ngOnInit() {
    this.store.dispatch(new Dogs.clearFav());
    
    if(localStorage.getItem('favDogs')==null){
      this.favDogs=[];
    }
    else{
      this.favDogs=JSON.parse(localStorage.getItem('favDogs'));
    }
    this.favDogs.forEach(val=>this.store.dispatch(new Dogs.addToFav(val)));  
  }

  selectedDog:Dog;
  unlike(dog:Dog){
    this.selectedDog={...dog};
    this.selectedDog.likeStatus="LIKE";
    for(let i=0;i<this.favDogs.length;i++){
      if(this.favDogs[i].url===dog.url){
        this.favDogs.splice(i,1);
      }
    }
    localStorage.setItem('favDogs',JSON.stringify(this.favDogs));
    this.store.dispatch(new Dogs.deletefromFav(dog));
  }

  editDog:Dog;
  favDog: any;
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
      this.favDog=JSON.parse(localStorage.favDogs);
      for(let i=0;i<this.favDog.length;i++){
        if(this.favDog[i].url==this.editDog.url){
          
          this.favDog[i].name=this.editDog.name;
          this.favDog[i].breed=this.editDog.breed;
          this.favDog[i].description=this.editDog.description;
          this.favDog[i].likeStatus=this.editDog.likeStatus;
          localStorage.setItem("favDogs",JSON.stringify(this.favDog));

          if(this.favDog[i].likeStatus=="LIKE"){
            this.unlike(this.editDog);
          }
          else{
            this.store.dispatch(new Dogs.editFav(this.editDog));
          }
          dog=this.favDog[i];
        }
      }
      this.closeResult = result;
    });


  } 
  

}
