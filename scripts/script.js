var canvas = document.getElementById('canvas').getContext("2d");
//var context = canvas.getContext("2d");


var bee = new Bee(200,500,100,100, "yellow");
var spider = new Spider(100,100,100,100, "black");
var spider2 = new Spider(0,0,100,100, "orange");

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
    bee.draw();
    spider.draw();
    spider2.draw();
}

function update() { // responsável por atualizar essas coisas na tela
    bee.move();
    spider.move();
    spider2.move();
}


function main() { // pra receber todas as informações
    canvas.clearRect(0,0,500,900);
    update();
    draw();
}

setInterval(main,10)