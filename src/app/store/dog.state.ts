import { Dog } from '../model/dog.model'
import { State, Selector, StateContext, Action } from '@ngxs/store';
import { Dogs } from './dog.action';


export interface DogStateModel{
    dogs: Dog[];
}

@State<DogStateModel>(
    {
        name : 'DogModel',
        defaults : {
            dogs:[]
        }
    }
)

export class DogState{

    @Selector()
    static getAllDogs(state:DogStateModel){
        return state.dogs;
    }

    setLoading(payload:Dog){
        return (state)=>({
            dogs:[...state.dogs,payload]
        })
    }

    @Action(Dogs.Retrieve)
    loadDog(ctx:StateContext<DogStateModel>,{ payload }:Dogs.Retrieve){
        //const state=ctx.getState();
        ctx.setState(this.setLoading(payload))
        
    }

    @Action(Dogs.Clear)
    clearDogs(ctx:StateContext<DogStateModel>){
        const state=ctx.getState();
        ctx.setState({dogs:[]});
        
    }

    
}