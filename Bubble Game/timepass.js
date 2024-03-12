
var Time=60;
var newHit=0; 
var Score=0;

function makeBubble()
{
    var bubved= "";
for(var i=1;i<=112;i++)
{
    var v=Math.floor(Math.random()*10);
    bubved+=` <div id="bubble">${v}</div>`;
}
var pbtm=document.querySelector("#pbtm");
pbtm.innerHTML=bubved;
}

function setTimer()
{
    var timerint=setInterval(function()
    {
        if(Time>0)
        {
            Time--;
            document.querySelector("#timer-div").textContent=Time;
        }
        else if(Time<=0){
            document.querySelector("#pbtm").innerHTML="<h1>Game Over!</h1>";
            clearInterval(timerint);
        }
    },1000);
}   

function setHit()
{
    newHit=Math.floor(Math.random()*10);
    document.querySelector("#hit-div").textContent=newHit;
}

function incScore()
{
  Score+=10;
  document.querySelector("#score-div").textContent=Score;
}

function getBubble()
{
    document.querySelector("#pbtm").addEventListener("click",
    function(details)
    {
      var Clk_bbl=Number(details.target.textContent);
      if(Clk_bbl==newHit)
      {
        incScore();
        makeBubble();
        setHit();
      }
    })

}

function btnClick()
{
    if(document.querySelector("#strt").textContent=="Start")
    {
    document.querySelector("#strt").textContent="Restart";
    getBubble();
    setTimer();
    makeBubble();
    setHit();
    }
    else if(document.querySelector("#strt").textContent=="Restart")
    {
        Time=60;
        document.querySelector("#timer-div").textContent=Time;
        Score=0;
        document.querySelector("#score-div").textContent=Score;
    }
}