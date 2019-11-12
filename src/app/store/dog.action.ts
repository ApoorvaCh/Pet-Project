import { Dog } from '../model/dog.model';

export namespace Dogs{
export class Retrieve{
    static readonly type='[Dog] retrieveDogs';

    constructor(public payload : Dog){}
}

export class Clear{
    static readonly type='[Dog] clearDogs';
}

export class liked{
    static readonly type='[Dog] likeDog';

    constructor(public likedDog:Dog){}
}

export class addToFav{
    static readonly type='[Dog] favDog';

    constructor(public favDog:Dog){}
}

export class clearFav{
    static readonly type='[Dog] clearFavDog';
}

export class deletefromFav{
    static readonly type='[Dog] deleteFavDog';

    constructor(public favDog:Dog){}
}


}