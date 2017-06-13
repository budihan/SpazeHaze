/// <reference path="ship.ts"/>
/// <reference path="enemy.ts"/>
/// <reference path="player.ts"/>
/// <reference path="bullet.ts"/>
/// <reference path="enemyWave.ts"/>

class Game{
    private view:View;

    constructor(){

        let start = new Start(this);
        this.showView(start);

    }
    
    public showView(v:View):void{
        this.view = v;
    }
    

}

window.addEventListener("load", function() {
    new Game();
});