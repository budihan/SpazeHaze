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
    private score:Score;
    private wave:EnemyWave;
    private bullets:Array<Bullet>;

    constructor(g:Game){ 
        this.game = g;
        this.score = new Score();
        this.player = new Player(this);
        this.wave = new EnemyWave(this);
        this.bullets = new Array<Bullet>();
        //move fire intervall to enemy class

        requestAnimationFrame(() => this.gameLoop());
    }
    private gameLoop(){
        for (let b of this.bullets){
          b.move();
        }
        this.wave.move();
        this.player.move();

        this.enemyCollision();
        this.offscreen();
        this.playerCollision();
        
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
                    this.score.addScore(100);
                }
            }
        }
    }

    public playerCollision(){
        for (let b of this.bullets){
            if(Utils.checkCollision(b, this.player)){
                this.removeBullet(b);
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
        e.removeEnemy();
        let i:number = this.wave.getEnemies().indexOf(e);
        if (i != -1){
            this.wave.getEnemies().splice(i,1);
        }
    }

    public removePlayer(p:Player){
        for (let b of this.bullets){
            b.removeBullet();
        }

        for (let e of this.wave.getEnemies()){
            e.removeEnemy();
        }
        
        console.log("stop");
        p.removePlayer();
        
        for (let e of this.wave.getEnemies()){
            e.removeEnemy();
        }
        
        this.wave.removeWave();
        var level = this;
        level = undefined;

        let stop = new Stop(this.game);
        this.game.showView(stop);

        this.game = undefined;
        this.bullets = undefined;
        this.wave = undefined;
        this.player = undefined;
    }

    public removeBullet(b:Bullet){
        b.removeBullet();
        let i:number = this.bullets.indexOf(b);
        if (i != -1){
            this.bullets.splice(i,1);
        }
    }
    
}