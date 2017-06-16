/// <reference path="../ship.ts"/>
/// <reference path="../enemy.ts"/>
/// <reference path="../player.ts"/>
/// <reference path="../bullet.ts"/>
/// <reference path="../enemyWave.ts"/>
/// <reference path="../gun.ts"/>
/// <reference path="../utils.ts"/>
/// <reference path="../view.ts"/>

class Level implements View {
    private ship:Ship;
    private game:Game;
    private player:Player;
    private wave:EnemyWave;
    private utils:Utils;
    private bullets:Array<Bullet>;

    constructor(g:Game){ 
        this.game = g;
        this.player = new Player(this);
        this.wave = new EnemyWave(this);
        this.bullets = new Array<Bullet>();
        //move fire intervall to enemy class
        let i = setInterval(()=>this.wave.fire(), 1000);

        requestAnimationFrame(() => this.gameLoop());
    }
    private gameLoop(){
      this.player.move();
      this.wave.move();
      this.enemyCollision();
      this.playerCollision();
      this.offscreen();
        
      
      //this.collision();
      for (let b of this.bullets){
          b.move();
      }
      
      requestAnimationFrame(() => this.gameLoop());
    }

    public addBullet(b:Bullet){
        this.bullets.push(b);
    }

    public enemyCollision(){
        for (let e of this.wave.getEnemies()){
            for (let b of this.bullets){
                if(Utils.checkCollision(b,e)){
                    this.removeEnemy(e);
                    this.removeBullet(b);
                }
            }
        }
    }

    public playerCollision(){
        for (let b of this.bullets){
            if(Utils.checkCollision(b, this.player)){
                this.removePlayer(this.player);
            }
        }
    }

    public offscreen(){
        for (let b of this.bullets){
                if(Utils.bulletOfScreen(b)){
                    this.removeBullet(b);
                }
            }
        for (let e of this.wave.getEnemies()){
            if(Utils.shipOffScreen(e)){
                this.removeEnemy(e);
            }
        }
    }

    public playerOffScreen(){
        if (Utils.playerOffScreen(this.player)){
            
        }
    }

    public removeEnemy(e:Enemy){
        e.div.remove();
        let i:number = this.wave.getEnemies().indexOf(e);
        if (i != -1){
            this.wave.getEnemies().splice(i,1);
        }
    }

    public removePlayer(p:Player){
        p.div.remove();
        this.player = undefined;
        for (let e of this.wave.getEnemies()){
            e.div.remove();
            e = undefined;
        }
        for (let b of this.bullets){
            b.div.remove();
            b = undefined;
        }
        this.wave.removeWave();
        this.wave = undefined;
        let stop = new Stop(this.game);
        this.game.showView(stop);
    }

    public removeBullet(b:Bullet){
        b.div.remove();
        let i:number = this.bullets.indexOf(b);
        if (i != -1){
            this.bullets.splice(i,1);
        }
    }
    
}