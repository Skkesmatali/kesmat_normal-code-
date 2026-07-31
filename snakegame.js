const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const box = 20;
const rows = canvas.width / box;

let snake = [
    {x:9*box,y:10*box}
];

let direction = "RIGHT";

let food = {
    x:Math.floor(Math.random()*rows)*box,
    y:Math.floor(Math.random()*rows)*box
};

let score = 0;

document.addEventListener("keydown",changeDirection);

function changeDirection(e){

    if(e.key=="ArrowLeft" && direction!="RIGHT")
        direction="LEFT";

    if(e.key=="ArrowUp" && direction!="DOWN")
        direction="UP";

    if(e.key=="ArrowRight" && direction!="LEFT")
        direction="RIGHT";

    if(e.key=="ArrowDown" && direction!="UP")
        direction="DOWN";
}

function collision(head,array){

    for(let i=0;i<array.length;i++){

        if(head.x==array[i].x && head.y==array[i].y){
            return true;
        }
    }

    return false;
}

function draw(){

    ctx.fillStyle="#222";
    ctx.fillRect(0,0,400,400);

    for(let i=0;i<snake.length;i++){

        ctx.fillStyle=i==0?"lime":"green";

        ctx.fillRect(
            snake[i].x,
            snake[i].y,
            box-2,
            box-2
        );
    }

    ctx.fillStyle="red";

    ctx.beginPath();

    ctx.arc(
        food.x+10,
        food.y+10,
        8,
        0,
        Math.PI*2
    );

    ctx.fill();

    let snakeX=snake[0].x;
    let snakeY=snake[0].y;

    if(direction=="LEFT") snakeX-=box;
    if(direction=="RIGHT") snakeX+=box;
    if(direction=="UP") snakeY-=box;
    if(direction=="DOWN") snakeY+=box;

    if(snakeX==food.x && snakeY==food.y){

        score++;

        document.getElementById("score").innerHTML="Score : "+score;

        food={
            x:Math.floor(Math.random()*rows)*box,
            y:Math.floor(Math.random()*rows)*box
        };

    }else{
        snake.pop();
    }

    let newHead={
        x:snakeX,
        y:snakeY
    };

    if(
        snakeX<0 ||
        snakeY<0 ||
        snakeX>=400 ||
        snakeY>=400 ||
        collision(newHead,snake)
    ){

        clearInterval(game);

        alert("Game Over!\nScore : "+score);

        location.reload();

        return;
    }

    snake.unshift(newHead);
}

const game=setInterval(draw,200);
