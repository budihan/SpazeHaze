/// <reference path="ship.ts"/>

class Enemy extends Ship {
    protected utils:Utils;
    protected downSpeed:number;

    constructor(element:string,x:number,y:number,width:number,height:number, speed:number){
        super(element,x,y,width,height);

        this.downSpeed = speed;

        this.utils = new Utils();

    }

    //move down
    public move(){
        
        this.y = this.y + this.downSpeed;

        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

    //move left
    public move1(){
        let leftSpeed = this.utils.getRandomInt(4,6);
        this.y = this.y + this.downSpeed;
        this.x = this.x - leftSpeed;

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