class EnemyWave {
    private level:Level;

    public interval:number
    private enemies:Array<Enemy>;
    private enemiesFast:Array<Enemy>;

    constructor(l:Level){
        this.level = l;
        this.enemies = new Array<Enemy>();
        this.enemiesFast = new Array<Enemy>();

        //Spawner for small ships
        this.interval = setInterval(()=>this.createEnemy(this.enemies,"enemySmall",-57, 58, 55, 4), 2000);
        

        //this.intervalSmall = setInterval(()=>this.createEnemy("enemyBig", randomX, -57, 54, 56 , 4),3000);
    }

    private createEnemy(array:Array<Enemy>,element:string,y:number,width:number,height:number, speed:number){
        let randomX = Utils.getRandomInt(100, window.innerWidth - 100)

        array.push(new Enemy(this.level, element,randomX,y,width,height, speed));
    }

    public move(){
        for (let enemy of this.enemies){
          enemy.move();

          
        }
    }

    public moveFast(){
        for (let enemy of this.enemiesFast){
            enemy.move1();
        }
    }

    public getEnemies():Array<Enemy>{
        return this.enemies;
    }

    public removeWave(){
        clearInterval(this.interval);
    }
    
}