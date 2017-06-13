class Bullet {
    constructor(x, y) {
        this.x = x + 33;
        this.y = y;
        this.width = 22;
        this.height = 61;
        this.upSpeed = 4;
        this.createDiv();
        this.setPosition();
    }
    createDiv() {
        this.div = document.createElement("bullet");
        document.body.appendChild(this.div);
    }
    setPosition() {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
    move() {
        this.y = this.y - this.upSpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
}
class Ship {
    constructor(element, x, y, width, height) {
        this.createDiv(element);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.setPosition();
    }
    getDiv() {
        return this.div;
    }
    createDiv(element) {
        this.div = document.createElement(element);
        document.body.appendChild(this.div);
    }
    setPosition() {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
}
class Enemy extends Ship {
    constructor(element, x, y, width, height) {
        super(element, x, y, width, height);
        this.downSpeed = 1;
    }
    move() {
        this.y = this.y + this.downSpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
}
class EnemyWave {
    constructor() {
        this.utils = new Utils();
        this.enemies = new Array();
        this.interval = setInterval(() => this.createEnemy(), 10000);
    }
    createEnemy() {
        let randomX = this.utils.getRandomInt(0, window.innerWidth - 200);
        this.enemies.push(new Enemy("enemy", randomX, -185, 120, 185));
    }
    move() {
        for (let enemy of this.enemies) {
            enemy.move();
        }
    }
    getEnemies() {
        return this.enemies;
    }
}
class Player extends Ship {
    constructor(g) {
        let element = "ship";
        let w = 124;
        let h = 135;
        let x = window.innerWidth / 2 - w / 2;
        let y = window.innerHeight - 300;
        super(element, x, y, w, h);
        this.game = g;
        this.upKey = 87;
        this.downKey = 83;
        this.leftKey = 65;
        this.rightKey = 68;
        this.fireKey = 70;
        this.upSpeed = 0;
        this.downSpeed = 0;
        this.leftSpeed = 0;
        this.rightSpeed = 0;
        this.gun = new Gun(this.game, this, this.width);
        window.addEventListener("keydown", this.onKeyDown.bind(this));
        window.addEventListener("keyup", this.onKeyUp.bind(this));
    }
    toThis() {
        console.log("ship created");
    }
    move() {
        this.y = this.y - this.upSpeed + this.downSpeed;
        this.x = this.x - this.leftSpeed + this.rightSpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
    onKeyDown(event) {
        switch (event.keyCode) {
            case this.upKey:
                this.upSpeed = 3;
                break;
            case this.downKey:
                this.downSpeed = 3;
                break;
            case this.leftKey:
                this.leftSpeed = 5;
                break;
            case this.rightKey:
                this.rightSpeed = 5;
                break;
            case this.fireKey:
                this.gun.fire();
                break;
        }
    }
    onKeyUp(event) {
        switch (event.keyCode) {
            case this.upKey:
                this.upSpeed = 0;
                break;
            case this.downKey:
                this.downSpeed = 0;
                break;
            case this.leftKey:
                this.leftSpeed = 0;
                break;
            case this.rightKey:
                this.rightSpeed = 0;
                break;
        }
    }
}
class Game {
    constructor() {
        this.player = new Player(this);
        this.wave = new EnemyWave;
        this.bullets = new Array();
        requestAnimationFrame(() => this.gameLoop());
    }
    gameLoop() {
        this.player.move();
        this.wave.move();
        this.collision();
        for (let b of this.bullets) {
            b.move();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
    addBullet(b) {
        this.bullets.push(b);
    }
    collision() {
        for (let e of this.wave.getEnemies()) {
            for (let b of this.bullets) {
                if (b.getX() < e.getX() + e.getWidth() &&
                    b.getX() + b.getWidth() > e.getX() &&
                    b.getY() < e.getY() + e.getHeight() &&
                    b.getHeight() + b.getY() > e.getY()) {
                    console.log("HIT");
                }
            }
        }
    }
}
class Gun {
    constructor(g, p, pWidth) {
        this.game = g;
        this.player = p;
        this.width = 22;
        this.height = 61;
        this.x = pWidth / 2 - this.width / 2;
        this.y = -10;
        this.createDiv(p);
        this.setPosition();
    }
    setPosition() {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    }
    createDiv(player) {
        this.div = document.createElement("gun");
        player.div.appendChild(this.div);
    }
    move() {
    }
    fire() {
        let b = new Bullet(this.player.x, this.player.y);
        this.game.addBullet(b);
    }
}
window.addEventListener("load", function () {
    new Game();
});
class Utils {
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}
//# sourceMappingURL=main.js.map