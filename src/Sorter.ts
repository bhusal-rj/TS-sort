

interface SortCollection{
    get length():number,
    compare(leftIndex:number,rightIndex:number):boolean,
    swap(leftIndex:number,rightIndex:number):void;
}

export abstract class Sorter{

    abstract compare(leftIndex:number,rightIndex:number):boolean;
    abstract swap(leftIndex:number,rightIndex:number):void;
    abstract length:number;


    sort():void{
        const {length}=this;
        
        for(let i=1;i<length;i++){
            for(let j=0;j<length-i;j++){
                if(this.compare(j,j+1)){
                    this.swap(j,j+1);
                                };
            }
        }
    }
}

