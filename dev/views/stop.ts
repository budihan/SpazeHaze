class Stop implements View {
    private game:Game;
    private score:HTMLElement;
    private btn:HTMLElement;

    constructor(g:Game){
        this.game = g;

        this.createDiv();
        

    }

    public createDiv(){
        //score text
        this.score = document.createElement("score");
        this.score.innerHTML = "some text";
        document.body.appendChild(this.score);

        let scoreX = window.innerWidth/2 - 150;
        let scoreY = window.innerHeight/2 - 100;

        this.score.style.transform = "translate("+scoreX+"px, "+scoreY+"px)";

        //start again btn
        this.btn = document.createElement("start");
        document.body.appendChild(this.btn);

        let btnX = window.innerWidth/2 - 75;
        let btnY = window.innerHeight/2 - 75;

        this.btn.style.transform = "translate("+btnX+"px, "+btnY+"px)";

        this.btn.addEventListener("click", ()=>this.startGame());
    }

     private startGame(){
        let level = new Level(this.game);
        this.game.showView(level);
        console.log("clicked")

        this.score.remove();
        this.score = undefined;
        this.btn.remove();
        this.btn = undefined;
    }


}