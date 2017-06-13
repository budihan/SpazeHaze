var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bullet = (function () {
    function Bullet(x, y) {
        this.x = x + 11;
        this.y = y;
        this.width = 33;
        this.height = 48;
        this.upSpeed = 8;
        this.createDiv();
        this.setPosition();
    }
    Bullet.prototype.createDiv = function () {
        this.div = document.createElement("bullet");
        document.body.appendChild(this.div);
    };
    Bullet.prototype.setPosition = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Bullet.prototype.move = function () {
        this.y = this.y - this.upSpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Bullet.prototype.getX = function () {
        return this.x;
    };
    Bullet.prototype.getY = function () {
        return this.y;
    };
    Bullet.prototype.getWidth = function () {
        return this.width;
    };
    Bullet.prototype.getHeight = function () {
        return this.height;
    };
    return Bullet;
}());
var Ship = (function () {
    function Ship(element, x, y, width, height) {
        this.createDiv(element);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.setPosition();
    }
    Ship.prototype.getDiv = function () {
        return this.div;
    };
    Ship.prototype.createDiv = function (element) {
        this.div = document.createElement(element);
        document.body.appendChild(this.div);
    };
    Ship.prototype.setPosition = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Ship;
}());
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy(element, x, y, width, height, speed) {
        var _this = _super.call(this, element, x, y, width, height) || this;
        _this.downSpeed = speed;
        _this.utils = new Utils();
        return _this;
    }
    Enemy.prototype.move = function () {
        this.y = this.y + this.downSpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Enemy.prototype.move1 = function () {
        var leftSpeed = this.utils.getRandomInt(4, 6);
        this.y = this.y + this.downSpeed;
        this.x = this.x - leftSpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Enemy.prototype.getX = function () {
        return this.x;
    };
    Enemy.prototype.getY = function () {
        return this.y;
    };
    Enemy.prototype.getWidth = function () {
        return this.width;
    };
    Enemy.prototype.getHeight = function () {
        return this.height;
    };
    return Enemy;
}(Ship));
var EnemyWave = (function () {
    function EnemyWave() {
        var _this = this;
        this.utils = new Utils();
        this.enemies = new Array();
        this.enemiesSmall = new Array();
        this.interval = setInterval(function () { return _this.createEnemy("enemySmall", -57, 54, 56, 4); }, 1000);
    }
    EnemyWave.prototype.createEnemy = function (element, y, width, height, speed) {
        var randomX = this.utils.getRandomInt(100, window.innerWidth - 100);
        this.enemiesSmall.push(new Enemy(element, randomX, y, width, height, speed));
    };
    EnemyWave.prototype.move = function () {
        for (var _i = 0, _a = this.enemiesSmall; _i < _a.length; _i++) {
            var enemy = _a[_i];
            enemy.move();
        }
    };
    EnemyWave.prototype.move1 = function () {
        for (var _i = 0, _a = this.enemiesFast; _i < _a.length; _i++) {
            var enemy = _a[_i];
            enemy.move1();
        }
    };
    EnemyWave.prototype.getEnemies = function () {
        return this.enemiesSmall;
    };
    return EnemyWave;
}());
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(l, g) {
        var _this = this;
        var element = "ship";
        var w = 54;
        var h = 56;
        var x = window.innerWidth / 2 - w / 2;
        var y = window.innerHeight - 300;
        _this = _super.call(this, element, x, y, w, h) || this;
        _this.game = g;
        _this.level = l;
        _this.upKey = 87;
        _this.downKey = 83;
        _this.leftKey = 65;
        _this.rightKey = 68;
        _this.fireKey = 70;
        _this.upSpeed = 0;
        _this.downSpeed = 0;
        _this.leftSpeed = 0;
        _this.rightSpeed = 0;
        _this.gun = new Gun(_this.level, _this.game, _this, _this.width);
        window.addEventListener("keydown", _this.onKeyDown.bind(_this));
        window.addEventListener("keyup", _this.onKeyUp.bind(_this));
        return _this;
    }
    Player.prototype.toThis = function () {
        console.log("ship created");
    };
    Player.prototype.move = function () {
        this.y = this.y - this.upSpeed + this.downSpeed;
        this.x = this.x - this.leftSpeed + this.rightSpeed;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Player.prototype.onKeyDown = function (event) {
        switch (event.keyCode) {
            case this.upKey:
                this.upSpeed = 10;
                break;
            case this.downKey:
                this.downSpeed = 10;
                break;
            case this.leftKey:
                this.leftSpeed = 10;
                break;
            case this.rightKey:
                this.rightSpeed = 10;
                break;
            case this.fireKey:
                this.gun.fire();
                break;
        }
    };
    Player.prototype.onKeyUp = function (event) {
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
    };
    return Player;
}(Ship));
var Game = (function () {
    function Game() {
        var start = new Start(this);
        this.showView(start);
    }
    Game.prototype.showView = function (v) {
        this.view = v;
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
var Gun = (function () {
    function Gun(l, g, p, pWidth) {
        this.game = g;
        this.player = p;
        this.width = 17;
        this.height = 47;
        this.x = pWidth / 2 - this.width / 2;
        this.y = 0;
        this.createDiv(p);
        this.setPosition();
    }
    Gun.prototype.setPosition = function () {
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Gun.prototype.createDiv = function (player) {
        this.div = document.createElement("gun");
        player.div.appendChild(this.div);
    };
    Gun.prototype.move = function () {
    };
    Gun.prototype.fire = function () {
        var b = new Bullet(this.player.x, this.player.y);
        this.level.addBullet(b);
    };
    return Gun;
}());
var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    return Utils;
}());
var Level = (function () {
    function Level(g) {
        var _this = this;
        this.game = g;
        this.player = new Player(this, this.game);
        this.wave = new EnemyWave;
        this.bullets = new Array();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Level.prototype.gameLoop = function () {
        var _this = this;
        this.player.move();
        this.wave.move();
        this.collision();
        for (var _i = 0, _a = this.bullets; _i < _a.length; _i++) {
            var b = _a[_i];
            b.move();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Level.prototype.addBullet = function (b) {
        this.bullets.push(b);
    };
    Level.prototype.collision = function () {
        for (var _i = 0, _a = this.wave.getEnemies(); _i < _a.length; _i++) {
            var e = _a[_i];
            for (var _b = 0, _c = this.bullets; _b < _c.length; _b++) {
                var b = _c[_b];
                if (b.getX() < e.getX() + e.getWidth() &&
                    b.getX() + b.getWidth() > e.getX() &&
                    b.getY() < e.getY() + e.getHeight() - 20 &&
                    b.getHeight() + b.getY() > e.getY()) {
                    console.log("HIT");
                    this.removeShip(e);
                    this.removeBullet(b);
                }
                if (b.getY() < -10) {
                    this.removeBullet(b);
                }
            }
            if (e.getY() > window.innerHeight) {
                console.log("get rid of this div");
                this.removeShip(e);
            }
        }
    };
    Level.prototype.removeShip = function (e) {
        e.div.remove();
        var i = this.wave.getEnemies().indexOf(e);
        if (i != -1) {
            this.wave.getEnemies().splice(i, 1);
        }
    };
    Level.prototype.removeBullet = function (b) {
        b.div.remove();
        var i = this.bullets.indexOf(b);
        if (i != -1) {
            this.bullets.splice(i, 1);
        }
    };
    return Level;
}());
var Start = (function () {
    function Start(g) {
        this.game = g;
        this.width = 150;
        this.height = 150;
        this.x = window.innerWidth / 2 - this.width / 2;
        this.y = window.innerHeight / 2 - this.height / 2;
        this.createBtn();
    }
    Start.prototype.createBtn = function () {
        this.btn = document.createElement("start");
        document.body.appendChild(this.btn);
        this.btn.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Start;
}());
//# sourceMappingURL=main.js.map