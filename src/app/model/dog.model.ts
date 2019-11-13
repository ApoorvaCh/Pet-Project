export interface Dog{
    readonly url : string;
    name?:string;
    breed?:string;
    likeStatus?:string;   
    description?:string; 
}
   

export const enum dogStatus{
    status = 'success',
}

export interface DogApiResponse{
    message : string;
    status : string;
}