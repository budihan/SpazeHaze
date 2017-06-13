class Player extends Ship {
    private game:Game;

    //declare player control keys
    private upKey: number;
    private downKey: number;
    private leftKey: number;
    private rightKey: number;
    private fireKey: number;

    private upSpeed:number;
    private downSpeed:number;
    private leftSpeed:number;
    private rightSpeed: number;

    //composition
    protected gun:Gun;

    constructor(g:Game){
        let element:string = "ship";
        let w:number = 124;
        let h:number = 135
        let x = window.innerWidth/2 - w/2;
        let y = window.innerHeight - 300;
        super(element,x,y,w,h);

        this.game = g;
        //set player control keys (w,s,a,d,f)
        this.upKey = 87;
        this.downKey = 83;
        this.leftKey = 65;
        this.rightKey = 68;
        this.fireKey = 70;

        this.upSpeed = 0;
        this.downSpeed = 0;
        this.leftSpeed = 0;
        this.rightSpeed = 0;

        this.gun = new Gun(this.game, this, this.width);

        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    

    }



    private toThis(){
        console.log("ship created");
    }

    public move(){
        this.y = this.y - this.upSpeed + this.downSpeed;
        this.x = this.x - this.leftSpeed + this.rightSpeed;

        this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

    onKeyDown(event:KeyboardEvent): void {
        switch(event.keyCode){
            case this.upKey:
                this.upSpeed = 3;
                break;
            case this.downKey:
                this.downSpeed = 3;
                break;
            case this.leftKey:
                this.leftSpeed = 5;
                break;
            case this.rightKey:
                this.rightSpeed = 5;
                break;
            case this.fireKey:
                this.gun.fire();
                break;
        }
    }

     onKeyUp(event:KeyboardEvent): void {
        switch(event.keyCode){
            case this.upKey:
                this.upSpeed = 0;
                break;
            case this.downKey:
                this.downSpeed = 0;
                break;
            case this.leftKey:
                this.leftSpeed = 0;
                break;
            case this.rightKey:
                this.rightSpeed = 0;
                break;
        }
    }

    
}