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

    animation(name, limit) { // create the movement effect on bee
        
        this.timer += 1;
        
        if(this.timer > 5){
            this.timer = 0;
            this.frame += 1;
        }

        if(this.frame > limit) {
            this.frame = 1;
        }
        this.color = "assets/" + name + this.frame + ".png";
    }
}

class Bee extends Obj{
    direction = 0;
    lifes = 3;
    points = 0;
    movementSpeed = 1;


    move() {
        this.positionX += this.direction;
    }

    collide(obj) {
        if (this.positionX < obj.positionX +obj.width &&
            this.positionX + this.width > obj.positionX &&
            this.positionY < obj.positionY +obj.height &&
            this.positionY + this.height > obj.positionY) 
        {
            //console.log("colidiu");
            return true;
        }else {
            //console.log("NÃO colidiu");
            return false;
        }
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

    respaw() {
        this.positionY = -50;
        this.positionX = Math.random() * (400 - 0);
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

class Flower extends Spider{

}

class Text{
    draw(text, positionX, positionY, color) {
        canvas.font = "40px Arial";
        canvas.fillStyle = color;
        canvas.fillText(text,positionX,positionY);
    }
}