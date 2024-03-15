class Obj{
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
}

class Bee extends Obj{
    direction = 0;
    frame = 1;
    timer = 0;


    move() {
        this.positionX += this.direction;
    }

    animation() { // create the movement effect on bee
        this.timer += 1;
        
        if(this.timer > 5){
            this.timer = 0;
            this.frame += 1;
        }

        if(this.frame > 4) {
            this.frame = 1;
        }
        this.color = "assets/bee" + this.frame + ".png";
    }
}

class Spider extends Obj{
    frame = 1;
    timer = 0;
        
        
    // garantir que a aranha vai ficar descendo
    move() {
        this.positionY += 3;

        if(this.positionY > 900) {
            this.positionY = -50;
            this.positionX = Math.random() * (400 - 0); // posições aleatórias da aranha
        }
    }

    animation() { // create the movement effect on bee
        
        this.timer += 1;
        
        if(this.timer > 5){
            this.timer = 0;
            this.frame += 1;
        }

        if(this.frame > 4) {
            this.frame = 1;
        }
        this.color = "assets/spider" + this.frame + ".png";
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