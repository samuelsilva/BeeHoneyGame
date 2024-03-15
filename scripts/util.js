class Obj{
    constructor(positionX,positionY,width,height, color){
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        canvas.fillStyle = this.color;
        canvas.fillRect(this.positionX,this.positionY, this.width, this.height);
    }
}

class Bee extends Obj{
    direction = 0;

    move() {
        this.positionX += this.direction;
    }
}

class Spider extends Obj{
    
    // garantir que a aranha vai ficar descendo
    move() {
        this.positionY += 2;
        if(this.positionY > 900) {
            this.positionY = -50;
        }
    }
}