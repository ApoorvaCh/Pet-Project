import { Dog } from '../model/dog.model'
import { State, Selector, StateContext, Action } from '@ngxs/store';
import { Dogs } from './dog.action';
import { getHeapStatistics } from 'v8';


export interface DogStateModel{
    dogs: Dog[];
    favdogs:Dog[];
}

@State<DogStateModel>(
    {
        name : 'DogModel',
        defaults : {
            dogs:[],
            favdogs:[]
        }
    }
)

export class DogState{

    @Selector()
    static getAllDogs(state:DogStateModel){
        return state.dogs;
    }

    @Selector()
    static getAllFavDogs(state:DogStateModel){
        return state.favdogs;
    }

    @Action(Dogs.Retrieve)
    loadDog(ctx:StateContext<DogStateModel>,{ payload }:Dogs.Retrieve){
        const state=ctx.getState();
        ctx.patchState({dogs:[...state.dogs,payload]});
        
    }

    @Action(Dogs.Clear)
    clearDogs(ctx:StateContext<DogStateModel>){
        const state=ctx.getState();
        ctx.patchState({dogs:[]});
        
    }

    @Action(Dogs.clearFav)
    clearFav(ctx:StateContext<DogStateModel>){
        const state=ctx.getState();
        ctx.patchState({favdogs:[]});
    }

    @Action(Dogs.liked)
    likeDogs(ctx:StateContext<DogStateModel>,{ likedDog }:Dogs.liked){
        const state=ctx.getState();
        ctx.patchState({dogs:[...state.dogs,likedDog]});
    }
   

    @Action(Dogs.addToFav)
    addDogstoFav(ctx:StateContext<DogStateModel>,{favDog}:Dogs.addToFav){
        const state=ctx.getState();
        ctx.patchState({favdogs:[...state.favdogs,favDog]});
    }

    @Action(Dogs.loadFav)
    loadFav(ctx:StateContext<DogStateModel>,{favDogs}:Dogs.loadFav){
        const state=ctx.getState();
        ctx.patchState({favdogs:[...state.favdogs,favDogs]});
        
    }

    
}