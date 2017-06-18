class Ship {
    protected div: HTMLElement;
    protected x:number;
    protected y:number;
    protected gun:Gun;
    protected width:number;
    protected height:number;

    constructor(l:Level, element:string, x:number, y:number, width:number, height:number){
        this.createDiv(element);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        //create a gun on every ship
        this.gun = new Gun(l , this, width);

        //set spawn position
        this.setPosition();
    }
    protected createDiv(element:string){
        this.div = document.createElement(element);
        document.body.appendChild(this.div);
    }

    protected setPosition(){
        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

    public getDiv():HTMLElement{
        return this.div;
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