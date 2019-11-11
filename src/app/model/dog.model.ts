export interface Dog{
    url : string;
    like:boolean;
}

export const enum dogStatus{
    status = 'success',
}

export interface DogApiResponse{
    message : string;
    status : string;
}