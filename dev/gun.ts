///<reference path="player.ts"/>

class Gun {
    private div:HTMLElement;
    private game:Game;
    private level:Level;
    private player:Player;
    private x:number;
    private y:number;
    private width:number;
    private height:number;

    constructor(l:Level, g:Game, p:Player, pWidth:number){
        this.game = g;
        this.player = p;
        this.width = 17;
        this.height = 47;
        this.x = pWidth/2 - this.width/2;
        this.y = 0;

        this.createDiv(p);
        this.setPosition();
    }

    public setPosition(){
         this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

    public createDiv(player:Player){
        this.div = document.createElement("gun");
        player.div.appendChild(this.div);
    }

    public move(){

    }

    public fire(){
        let b:Bullet = new Bullet(this.player.x, this.player.y);
        this.level.addBullet(b);
    }
}