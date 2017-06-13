class EnemyWave {
    private level:Level;

    public fireInterval:number
    private enemies:Array<Enemy>;
    private enemiesFast:Array<Enemy>;
    private enemiesSmall:Array<Enemy>;
    private utils:Utils;

    constructor(l:Level){
        this.level = l;
        this.utils = new Utils();
        this.enemies = new Array<Enemy>();
        this.enemiesSmall = new Array<Enemy>();

        //Spawner for small ships
        let i = setInterval(()=>this.createEnemy("enemySmall",-57, 58, 55, 4), 1000);
        

        //this.intervalSmall = setInterval(()=>this.createEnemy("enemyBig", randomX, -57, 54, 56 , 4),3000);
    }

    private createEnemy(element:string,y:number,width:number,height:number, speed:number){
        let randomX = this.utils.getRandomInt(100, window.innerWidth - 100)

        this.enemiesSmall.push(new Enemy(this.level, element,randomX,y,width,height, speed));
    }

    public fire(){
        for (let enemy of this.enemiesSmall){
            enemy.fireGun();
           
        }
        
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