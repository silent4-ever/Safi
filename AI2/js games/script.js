$(document).ready(()=>{
    $("#canvas").append("<h2 class='text-center' style='margin: 200px'>Click for Start Game</h2>");
    $("#canvas").click(startGame);
});

var ballons = {ballon: []};
var totalScore = 0;
var totalBallons = 0;
var ballonColor = ["ballon-red", "ballon-yellow", "ballon-green"];
var setIntervalMoveBallons;
var setIntervalCheckBallons;
var gamePlay = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}  

const startGame =()=>{
    $("#canvas").html("");
    $("#canvas").css("cursor","url('./img/shoot.png'), auto");
    $("#canvas").unbind("click");
    gamePlay = true;
    showStarterBallon();
    setIntervalMoveBallons = setInterval(moveBallons, 50);
}

const showStarterBallon =async()=>{
    for(let i = 0; i<5 && gamePlay; i++){
        totalBallons+=1;
        let randomColor = parseInt(Math.random()*3);
        let cursorWidth = $("#canvas").width();
        let left = parseInt(Math.random()*((cursorWidth-60)))+"px";
        $("#canvas").append("<div id='ballon-"+totalBallons+
                            "' class='ballon "+ballonColor[randomColor]+
                            "' style='bottom: 0px;"+"; left: "+left+
                            "'><div class='dhaga'></div></div>");
        $("#ballon-"+totalBallons).bind("click", {id: totalBallons}, destroy);
        ballons["ballon-"+totalBallons]={speed: parseInt(Math.random()*10+1), bottom: 10};
        ballons.ballon.push(totalBallons);
        await sleep(1000);
    }
    checkBallons()
    if(gamePlay)
        setIntervalCheckBallons = setInterval(checkBallons, 2000);
}

const checkBallons =async ()=>{
    for(let i=0; i<5 && gamePlay;i++){
        if(ballons.ballon[i]==undefined){
            totalBallons+=1;
            let randomColor = parseInt(Math.random()*3);
            let cursorWidth = $("#canvas").width();
            let left = parseInt(Math.random()*((cursorWidth-60)))+"px";
            $("#canvas").append("<div id='ballon-"+(i+1)+
                                "' class='ballon "+ballonColor[randomColor]+
                                "' style='bottom: 0px;"+"; left: "+left+
                                "'><div class='dhaga'></div></div>");
            $("#ballon-"+(i+1)).bind("click", {id: i+1}, destroy);
            ballons["ballon-"+(i+1)]={speed: parseInt(Math.random()*10+1), bottom: 10};
            ballons.ballon[i] = i+1;
            await sleep(1000)
        }
    }
}

function moveBallons() {
    try {
        ballons.ballon.forEach(s=>{
            if(gamePlay) {
                let ballon;
                if($("#ballon-"+s).css("bottom").length==3){
                    bottom = parseInt($("#ballon-"+s).css("bottom").substr(-3,1));
                } else if($("#ballon-"+s).css("bottom").length==4) {
                    bottom = parseInt($("#ballon-"+s).css("bottom").substr(-4,2));
                } else {
                    bottom = parseInt($("#ballon-"+s).css("bottom").substr(-5,3));
                }
                bottom += ballons["ballon-"+s].speed;
                $("#ballon-"+s).css("bottom", bottom+"px");
                ballons["ballon-"+s].bottom = bottom;
                if(bottom>400){
                    window.clearInterval(setIntervalCheckBallons)
                    window.clearInterval(setIntervalMoveBallons)
                    gamePlay = false;
                    alert("Your score: "+totalScore)
                    ballons = {ballon: []};
                    totalScore = 0;
                    totalBallons = 0;
                    $("#canvas").html("")
                    $("#canvas").css("cursor", "pointer");
                    $("#canvas").append("<h2 class='text-center' style='margin: 200px'>Click for Restart Game</h2>");
                    $("#canvas").click(startGame);
                }        
            }
        });
    } catch (error) {}
}

const destroy = async (event)=> {
    $("#ballon-"+event.data.id).remove();
    delete ballons.ballon[event.data.id-1]
    delete ballons["ballon-"+event.data.id];
    totalScore+=1;
}