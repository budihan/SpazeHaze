class Start implements View {

    private game:Game;
    private btn:HTMLElement;

    private width:number;
    private height:number;
    private x:number;
    private y:number;

    constructor(g:Game){
        this.game = g;
        this.width = 150;
        this.height = 150;
        this.x = window.innerWidth/2 -this.width/2;
        this.y = window.innerHeight/2 -this.height/2;
        this.createBtn();
    }

    private createBtn(){
        this.btn = document.createElement("start");
        document.body.appendChild(this.btn);

        //set position
        this.btn.style.transform = "translate("+this.x+"px, "+this.y+"px)";
        

    }
}