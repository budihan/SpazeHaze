class EnemyWave {
    private level:Level;

    public interval:number
    private intervalFast:number;
    private enemies:Array<Enemy>;
    private enemiesFast:Array<Enemy>;

    constructor(l:Level){
        this.level = l;
        this.enemies = new Array<Enemy>();
        this.enemiesFast = new Array<Enemy>();

        //Spawner for normal enemy
        this.interval = setInterval(()=>this.createEnemy(this.enemies,"enemySmall",-57, 58, 55, 1), 1000);
        
        //Spawner for fast enemy
        //this.intervalFast = setInterval(()=>this.createEnemy(this.enemiesFast,"enemyFast", window.innerWidth, 60, 76 , 1),2000);
    }

    private createEnemy(array:Array<Enemy>,element:string,y:number,width:number,height:number, speed:number){
        let random = Utils.getRandomInt(100, window.innerWidth - 100);
        array.push(new Enemy(this.level, element,random,y,width,height, speed));
        
    }

    public move(){
        for (let enemy of this.enemies){
          enemy.move();

          
        }
    }

    public moveFast(){
        for (let enemy of this.enemiesFast){
            enemy.moveFast();
        }
    }

    public getEnemies():Array<Enemy>{
        return this.enemies;
    }

    public removeWave(){
        clearInterval(this.interval);
        clearInterval(this.intervalFast);
    }
    
}