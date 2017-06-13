/// <reference path="ship.ts"/>

class Enemy extends Ship {
    protected downSpeed:number;

    constructor(element:string,x:number,y:number,width:number,height:number){
        super(element,x,y,width,height);

        this.downSpeed = 1;
    }

    public move(){
        
        this.y = this.y + this.downSpeed;

        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

    public getX():number{
        return this.x;
    }

    public getY():number{
        return this.y;
    }

    public getWidth():number{
        return this.width;
    }

    public getHeight():number{
        return this.height;
    }

}