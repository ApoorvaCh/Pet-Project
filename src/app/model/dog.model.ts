export interface Dog{
    url : string;
    
}

export const enum dogStatus{
    status = 'success',
}

export interface DogApiResponse{
    message : string;
    status : string;
}