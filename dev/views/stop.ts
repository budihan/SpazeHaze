class Stop implements View {
    private game:Game;
    private score:HTMLElement;


    constructor(g:Game){
        this.game = g;

        this.createDiv();
        

    }

    public createDiv(){
        //score text
        this.score = document.createElement("score");
        this.score.innerHTML = "GAME OVER";
        document.body.appendChild(this.score);

        let scoreX = window.innerWidth/2 - 150;
        let scoreY = window.innerHeight/2 - 100;

        this.score.style.transform = "translate("+scoreX+"px, "+scoreY+"px)";
    }
}