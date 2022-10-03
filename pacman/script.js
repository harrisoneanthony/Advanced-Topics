// list of features to build

// 1) have JS display the world of brick/coin/etc
// 2) have the pacman move up and down

var world = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,1,1,2,1,1,1,1,1,2],
    [2,1,1,2,1,2,2,2,1,2],
    [2,1,1,2,1,2,1,2,1,2],
    [2,1,1,2,1,2,1,2,1,2],
    [2,1,1,2,2,2,1,2,1,2],
    [2,1,1,1,1,1,1,2,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2]
];

var score = 0;

var pacman = {
    x: 1,
    y: 1
};

function displayWorld(){
    var output ='';
    for (var i=0; i<world.length; i++){
        output += "\n<div class='row'>\n";
        for (var j=0; j<world[i].length; j++){
            if(world[i][j] == 2)
                output += "<div class='brick'></div>";
            else if(world[i][j] == 1)
                output += "<div class='coin'></div>";
            if(world[i][j] == 0)
                output += "<div class='empty'></div>";
            }
        output += "\n</div>";
        }
    // console.log(output)
    document.getElementById('world').innerHTML = output;
}
function displayPacman(){
    document.getElementById("pacman").style.top = pacman.y*100+"px";
    document.getElementById("pacman").style.left = pacman.x*100+"px";
}

function displayScore(){
    document.getElementById("score").innerHTML = score;
}

displayWorld();
displayPacman();
displayScore();

// left = 37
// up = 38
// right = 39
// down = 40

document.onkeydown = function(e){
    if(e.keyCode == 37){
        pacman.x--;
    }
    else if(e.keyCode == 39){
        pacman.x++;
    }
    else if (e.keyCode == 38){
        pacman.y--;
    }
    else if (e.keyCode == 40){
        pacman.y++;
    }
    if(world[pacman.y][pacman.x] == 1){
        world[pacman.y][pacman.x] = 0;
        score += 10
        displayWorld();
        displayScore();
    }
    console.log(e.keyCode);
    displayPacman();
}