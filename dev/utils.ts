

class Utils {

    public static getRandomInt(min:number,max:number){
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

    public static checkCollision(b:Bullet, s: Ship):boolean{
        return (b.getX() < s.getX() + s.getWidth() &&
                b.getX() + b.getWidth() > s.getX() &&
                b.getY() < s.getY() + s.getHeight() &&
                b.getHeight() + b.getY() > s.getY())
    }

    public static bulletOfScreen(b:Bullet):boolean{
        return (b.getY() < -10 || b.getY() > window.innerHeight)
    }

    public static shipOffScreen(s:Ship):boolean{
        return(s.getY() > window.innerHeight)
    }

    public static playerOffScreen(p:Player):boolean{
        if (p.getX() < 0 || 
            p.getX() > window.innerWidth - 54 ||
            p.getY() < 0 ||
            p.getY() > window.innerHeight - 56){
                return true;
                //stop set x en y
            } else {
                return false;
            }
    }
}