class Bullet {

    private div:HTMLElement;
    private x:number;
    private y:number;
    private width:number;
    private height:number;
    private upSpeed:number;
    constructor(x:number, y:number){
        this.x = x + 33;
        this.y = y;

        this.width = 22;
        this.height = 61;

        this.upSpeed = 4;

        this.createDiv();
        this.setPosition();

    }

    public createDiv(){
        this.div = document.createElement("bullet");
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