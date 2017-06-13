class EnemyWave {

    private interval:number
    private enemies:Array<Enemy>;
    private enemiesFast:Array<Enemy>;
    private enemiesSmall:Array<Enemy>;
    private utils:Utils;

    constructor(){
        this.utils = new Utils();
        this.enemies = new Array<Enemy>();
        this.enemiesSmall = new Array<Enemy>();

        //Spawner for small ships
        this.interval = setInterval(()=>this.createEnemy("enemySmall",-57, 54, 56, 4), 1000);

        //this.intervalSmall = setInterval(()=>this.createEnemy("enemyBig", randomX, -57, 54, 56 , 4),3000);
    }

    private createEnemy(element:string,y:number,width:number,height:number, speed:number){
        let randomX = this.utils.getRandomInt(100, window.innerWidth - 100)

        this.enemiesSmall.push(new Enemy(element,randomX,y,width,height, speed));
    }

    public move(){
        for (let enemy of this.enemiesSmall){
          enemy.move();
        }
    }

    public move1(){
        for (let enemy of this.enemiesFast){
            enemy.move1();
        }
    }

    public getEnemies():Array<Enemy>{
        return this.enemiesSmall;
    }
    
}