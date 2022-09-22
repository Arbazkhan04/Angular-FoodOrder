export class foods{
    id!:number;
    price!:number;
    name!:string;
    favourite:boolean=false;
    star:number=0; //once you have initilize a value you dont need to use explanatio mark
    tags?:string[];
    imageUrl!:string;
    cocktime!:string;
    origins!:string[]
    //! represent undefined you can alse write this as origin:string[]

}