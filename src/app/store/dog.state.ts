import { Dog } from '../model/dog.model'
import { State, Selector, StateContext, Action } from '@ngxs/store';
import { Dogs } from './dog.action';

export interface DogStateModel{
    dogs: {[key:string]:Dog};
    favdogs:{[key:string]:Dog};
}

@State<DogStateModel>(
    {
        name : 'DogModel',
        defaults : {
            dogs:{},
            favdogs:{}
        }
    }
)

export class DogState{

    @Selector()
    static getAllDogs(state:DogStateModel){
        return Object.values(state.dogs);
    }

    @Selector()
    static getAllFavDogs(state:DogStateModel){
        return Object.values(state.favdogs);
    }

    @Action(Dogs.Retrieve)
    loadDog(ctx:StateContext<DogStateModel>,{ payload }:Dogs.Retrieve){
        const state=ctx.getState();
        ctx.patchState({
            dogs:{...state.dogs,
            [payload.url]:payload}});
        
    }

    @Action(Dogs.Clear)
    clearDogs(ctx:StateContext<DogStateModel>){
        const state=ctx.getState();
        ctx.patchState({dogs:{}});
        
    }

    @Action(Dogs.clearFav)
    clearFav(ctx:StateContext<DogStateModel>){
        const state=ctx.getState();
        ctx.patchState({favdogs:{}});
    }

    @Action(Dogs.liked)
    likeDogs(ctx:StateContext<DogStateModel>,{ likedDog }:Dogs.liked){
        const state=ctx.getState();
        ctx.patchState({
            dogs:{...state.dogs,
                [likedDog.url]:likedDog}});
    }
   

    @Action(Dogs.addToFav)
    addDogstoFav(ctx:StateContext<DogStateModel>,{favDog}:Dogs.addToFav){
        const state=ctx.getState();
        const dogsCopy={...state.dogs};
        delete dogsCopy[favDog.url];
        ctx.patchState({
            dogs:dogsCopy,
            favdogs:{...state.favdogs,
            [favDog.url]:favDog}});
    }

    @Action(Dogs.deletefromFav)
    deletefromFav(ctx:StateContext<DogStateModel>,{ favDog }: Dogs.deletefromFav){
        const state=ctx.getState();
        const favDogsCopy={...state.favdogs};
        delete favDogsCopy[favDog.url];
        ctx.patchState({
            favdogs:favDogsCopy
        })
    }

    @Action(Dogs.editFav)
    editFavDog(ctx:StateContext<DogStateModel>,{ editDog }: Dogs.editFav){
        const state=ctx.getState();
        ctx.patchState({
            favdogs:{...state.favdogs,
            [editDog.url]:editDog
        }});
    }

    @Action(Dogs.edit)
    editDog(ctx:StateContext<DogStateModel>,{ editDog }:Dogs.edit){
        const state=ctx.getState();
        ctx.patchState({
            dogs:{
                ...state.dogs,
                [editDog.url]:editDog
            }
        });
    }

}