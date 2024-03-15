var canvas = document.getElementById('canvas').getContext("2d");
//var context = canvas.getContext("2d");

var backgroundImage = new Background(0,0,500,900, "assets/bg.png");
var backgroundImage2 = new Background(0,-900,500,900, "assets/bg.png");
var flower = new Flower(0,0,50,50,"assets/flower1.png")
var bee = new Bee(200,500,100,80, "assets/bee1.png");
var spider = new Spider(100,100,100,100, "assets/spider1.png");

// adicionando eventos de teclado - movimentando objetos
document.addEventListener("keydown", function(event) { //pressionar uma tecla
    if(event.key === "a"){ //
        console.log("pressionou TECLA A");
        bee.direction = -1; // move pra esquerda
    }
    if(event.key === "d"){ //
        console.log("pressionou TECLA D");
        bee.direction = 1; // move pra esquerda
    }
});

document.addEventListener("keyup", function(event) { //soltar uma tecla
    if(event.key === "a"){ //
        console.log("soltou TECLA A");
        bee.direction = 0; // move pra esquerda
    }
    if(event.key === "d"){ //
        console.log("soltou TECLA D");
        bee.direction = 0; // move pra esquerda
    }
});


function draw() { // responsável por desenhar coisas na tela
    backgroundImage.draw();
    backgroundImage2.draw();
    bee.draw();
    spider.draw();
    flower.draw();
}

function update() { // responsável por atualizar essas coisas na tela
    backgroundImage.move(3, 900, 0);
    backgroundImage2.move(3, 0, -900)
    bee.move();
    bee.animation("bee",4);
    spider.move();
    spider.animation("spider",4);
    flower.move();
    flower.animation("flower",2)
}


function main() { // pra receber todas as informações
    canvas.clearRect(0,0,500,900);
    update();
    draw();
}

setInterval(main,10)