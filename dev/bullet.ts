class Bullet {
    private ship:Ship;

    public div:HTMLElement;
    private x:number;
    private y:number;
    private width:number;
    private height:number;
    private upSpeed:number;
    constructor(x:number, y:number, fireDirection:number, s:Ship, speed:number){
        this.ship = s;
        this.x = x+11;

        if(s instanceof Enemy){
            this.y = y + 60;
        } else {
            this.y = y - 50;
        }
        

        this.width = 33;
        this.height = 48;

        this.upSpeed = speed * fireDirection;

        this.createDiv();
        this.setPosition();

    }

    public createDiv(){
        if (this.ship instanceof Enemy){
            this.div = document.createElement("bulletEnemy")
        } else{
            this.div = document.createElement("bullet");
        }
        document.body.appendChild(this.div);
    }
    public setPosition(){
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

    public move(){
        this.y = this.y - this.upSpeed;
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