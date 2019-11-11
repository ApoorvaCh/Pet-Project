import { Dog } from '../model/dog.model';

export namespace Dogs{
export class Retrieve{
    static readonly type='[Dog] retrieveDogs';

    constructor(public payload : Dog){}
}

export class Clear{
    static readonly type='[Dog] clearDogs';
}

}