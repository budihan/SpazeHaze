/// <reference path="../ship.ts"/>
/// <reference path="../enemy.ts"/>
/// <reference path="../player.ts"/>
/// <reference path="../bullet.ts"/>
/// <reference path="../enemyWave.ts"/>


class Level implements View {
    private game:Game;
    private player:Player;
    private wave:EnemyWave;
    private utils:Utils;
    private bullets:Array<Bullet>;

    constructor(g:Game){ 
        this.game = g;
        this.player = new Player(this, this.game);
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
                    b.getY() < e.getY() + e.getHeight() - 20 &&
                    b.getHeight() + b.getY() > e.getY())
                {
                   //remove bullet and enemy
                   console.log("HIT");
                   this.removeShip(e);
                   this.removeBullet(b);               
                }
                if (b.getY() < -10) {
                    this.removeBullet(b);
                } 
               
            }
              if (e.getY() > window.innerHeight ) {
                    console.log("get rid of this div");
                    this.removeShip(e);
                }  
        }
    }

    public removeShip(e:Enemy){
        e.div.remove();
        let i:number = this.wave.getEnemies().indexOf(e);
        if (i != -1){
            this.wave.getEnemies().splice(i,1);
        }
    }

    public removeBullet(b:Bullet){
        b.div.remove();
        let i:number = this.bullets.indexOf(b);
        if (i != -1){
            this.bullets.splice(i,1);
        }
    }
    
}