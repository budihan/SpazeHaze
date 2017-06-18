/// <reference path="ship.ts"/>

class Enemy extends Ship {
    private level:Level;
    protected downSpeed:number;
    protected fireInterval:number;

    constructor(l:Level, element:string,x:number,y:number,width:number,height:number, speed:number){
        super(l,element,x,y,width,height);

        this.downSpeed = speed;

        this.fireInterval = setInterval(()=>this.fireGun(), 1200);

    }

    //move for normal enemy
    public move(){
        
        this.y = this.y + this.downSpeed;

        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

    //move for fast enemy
    public moveFast(){
        let leftSpeed = 8;
        this.y = this.y + this.downSpeed;
        this.x = this.x - leftSpeed;

        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

    public fireGun(){
        let fireDirection = -1;
        this.gun.fire(fireDirection);
    }

    public removeEnemy(){
        this.div.remove();
        clearInterval(this.fireInterval);
    }
    
    // public getX():number{
    //     return this.x;
    // }

    // public getY():number{
    //     return this.y;
    // }

    // public getWidth():number{
    //     return this.width;
    // }

    // public getHeight():number{
    //     return this.height;
    // }

}