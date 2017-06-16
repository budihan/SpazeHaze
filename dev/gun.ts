///<reference path="player.ts"/>

class Gun {
    private div:HTMLElement;
    private level:Level;
    private ship:Ship;
    private x:number;
    private y:number;
    private width:number;
    private height:number;

    constructor(l:Level, s:Ship, sWidth:number){
        this.level = l;
        this.ship = s;
        this.width = 17;
        this.height = 47;
        this.x = sWidth/2 - this.width/2;
        if(s instanceof Enemy) {
            this.y = 10;
        } else {
            this.y = 0;
        }
        

        this.createDiv(s);
        this.setPosition();
    }

    public setPosition(){
         this.div.style.transform = "translate("+this.x+"px, "+this.y+"px)";
    }

    public createDiv(ship:Ship){
        if (ship instanceof Enemy){
            this.div = document.createElement("gunEnemy");
         } else {
            this.div = document.createElement("gun");
         }
        ship.div.appendChild(this.div);
    }

    public move(){

    }

    public fire(fireDirection:number){
        let speed = 0;
        if (this.ship instanceof Player){
            let speed = 15;
            let b:Bullet = new Bullet(this.ship.x, this.ship.y, fireDirection, this.ship, speed);
            this.level.addBullet(b);
        } else {
            let speed = 8;
            let b:Bullet = new Bullet(this.ship.x, this.ship.y, fireDirection, this.ship, speed);
            this.level.addBullet(b);
        }

        
    }
}