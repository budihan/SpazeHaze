class Stop implements View {
    private game:Game;
    private score:Score;
    private endScreen:HTMLElement;
    private scoreScreen:HTMLElement;


    constructor(g:Game, s:Score){
        this.game = g;
        this.score = s;

        this.createDiv();
        

    }

    public createDiv(){
        //score text
        this.endScreen = document.createElement("score");
        this.endScreen.innerHTML = "GAME OVER";
        document.body.appendChild(this.endScreen);

        let endScreenX = window.innerWidth/2 - 150;
        let endScreenY = window.innerHeight/2 - 100;

        this.endScreen.style.transform = "translate("+endScreenX+"px, "+endScreenY+"px)";

        this.scoreScreen = document.createElement("score");
        this.scoreScreen.innerHTML = "Your score: " + this.score.getScore();
        document.body.appendChild(this.scoreScreen);

        let scoreScreenX = window.innerWidth/2 - 150;
        let scoreScreenY = window.innerHeight/2;

        this.scoreScreen.style.transform = "translate("+scoreScreenX+"px, "+scoreScreenY+"px)";


    }
}