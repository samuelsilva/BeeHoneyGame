class Obj{

    frame = 1;
    timer = 0;

    constructor(positionX,positionY,width,height, color){
        this.positionX = positionX;
        this.positionY = positionY;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        var img = new Image();
        img.src = this.color;
        canvas.drawImage(img, this.positionX, this.positionY, this.width, this.height);
    }

    animation(name) { // create the movement effect on bee
        
        this.timer += 1;
        
        if(this.timer > 5){
            this.timer = 0;
            this.frame += 1;
        }

        if(this.frame > 4) {
            this.frame = 1;
        }
        this.color = "assets/" + name + this.frame + ".png";
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
        this.positionY += 3;

        if(this.positionY > 900) {
            this.positionY = -50;
            this.positionX = Math.random() * (400 - 0); // posições aleatórias da aranha
        }
    }

}

class Background extends Obj{

    move(speed, limit, pos) {
        this.positionY += speed;

        if(this.positionY > limit){
            this.positionY = pos;
        }
    }
}