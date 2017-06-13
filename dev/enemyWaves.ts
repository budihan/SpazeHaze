class EnemyWave {

    private interval:number;
    private enemies:Array<Enemy>;
    private utils:Utils;

    constructor(){
        this.utils = new Utils();
        this.enemies = new Array<Enemy>();
        this.interval = setInterval(()=>this.createEnemy(),10000);
    }

    private createEnemy(){
        
        let randomX = this.utils.getRandomInt(0, window.innerWidth - 200);

        this.enemies.push(new Enemy("enemy",randomX,-185,120,185));
    }

    public move(){
        for (let enemy of this.enemies){
          enemy.move();
        }
    }

    public getEnemies():Array<Enemy>{
        return this.enemies;
    }
    
}