/// <reference path="ship.ts"/>
/// <reference path="enemy.ts"/>
/// <reference path="player.ts"/>

class Game{
    private player:Player;
    private wave:EnemyWave;
    private utils:Utils;
    private bullets:Array<Bullet>;

    constructor(){
        this.player = new Player(this);
        this.wave = new EnemyWave;
        this.bullets = new Array<Bullet>();

        requestAnimationFrame(() => this.gameLoop());
    }
    

    private gameLoop(){
      this.player.move();
      this.wave.move();
      this.collision();
      for (let b of this.bullets){
          b.move();
      }
      
      requestAnimationFrame(() => this.gameLoop());
    }

    public addBullet(b:Bullet){
        this.bullets.push(b);
    }

    public collision(){
        for (let e of this.wave.getEnemies()){
            for (let b of this.bullets){
               if(  b.getX() < e.getX() + e.getWidth() &&
                    b.getX() + b.getWidth() > e.getX() &&
                    b.getY() < e.getY() + e.getHeight() &&
                    b.getHeight() + b.getY() > e.getY()
               ){
                   //remove bullet and enemy
                   console.log("HIT");
               }
            }
        }
    }

}