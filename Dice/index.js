const diceButton = document.querySelector("button");
const player1dice = document.querySelector(".player1dice");
const player2dice = document.querySelector(".player2dice");
// dice 1

function makedivDice1(){
  var div = document.createElement("div");
  player1dice.appendChild(div);
  const firstDiv = document.querySelector(".player1dice div");
  firstDiv.classList.add("firstrow")
  var div = document.createElement("div");
  player1dice.appendChild(div);
  const secondDiv = document.querySelector(".player1dice div:nth-child(2)");
  secondDiv.classList.add("secondrow")
  var div = document.createElement("div");
  player1dice.appendChild(div);
  const thirdDiv = document.querySelector(".player1dice div:last-child");
  thirdDiv.classList.add("thirdrow")
}
function changedice1(dotNum){
    player1dice.innerText="";
    makedivDice1();
    const firstrow1 = document.querySelector(".player1dice .firstrow");
    const secondrow1 = document.querySelector(".player1dice .secondrow");
    const thirdrow1 = document.querySelector(".player1dice .thirdrow");

    function row1dot(){
      var dot1 = document.createElement("div");
               firstrow1.appendChild(dot1);
               dot1.classList.add("dot");
    }
    function row2dot(){
      var dot2 = document.createElement("div");
               secondrow1.appendChild(dot2);
               dot2.classList.add("dot");
    }
    function row3dot(){
      var dot3 = document.createElement("div");
               thirdrow1.appendChild(dot3);
               dot3.classList.add("dot");
    }
    function row2dot5(){
      var dot2 = document.createElement("div");
               secondrow1.appendChild(dot2);
               dot2.classList.add("dot");
      document.querySelector(".secondrow").classList.add("dot5");
      document.querySelector(".secondrow").classList.remove("secondrow");
    }

    switch(dotNum){
      case 1 : row2dot5();
                break;
      case 2 :
              row1dot();
              row3dot();
                  break;
      case 3 : row1dot();
              row2dot5();
              row3dot();
                  break;
      case 4 : row1dot(); row1dot();
              row3dot(); row3dot();
                  break;
      case 5 : row1dot(); row1dot();
              row2dot5();
              row3dot();row3dot();
              break;
      case 6 :row1dot(); row1dot();
              row2dot(); row2dot();
              row3dot();row3dot();
              break;
    }

}
// dice 2
function makedivDice2(){
  var div = document.createElement("div");
  player2dice.appendChild(div);
 const first2Div =  document.querySelector(".player2dice div");
 first2Div.classList.add("firstrow")
  var div = document.createElement("div");
  player2dice.appendChild(div);
  const second2Div = document.querySelector(".player2dice div:nth-child(2)");
  second2Div.classList.add("secondrow")
  var div = document.createElement("div");
  player2dice.appendChild(div);
  const third2Div = document.querySelector(".player2dice div:last-child");
  third2Div.classList.add("thirdrow")

}
function changedice2(dotNum2){
  player2dice.innerText="";
  makedivDice2();
  const firstrow2 = document.querySelector(".player2dice .firstrow");
  const secondrow2 = document.querySelector(".player2dice .secondrow");
  const thirdrow2 = document.querySelector(".player2dice .thirdrow");

  function row1dot(){
    var dot1 = document.createElement("div");
             firstrow2.appendChild(dot1);
             dot1.classList.add("dot");
  }
  function row2dot(){
    var dot2 = document.createElement("div");
             secondrow2.appendChild(dot2);
             dot2.classList.add("dot");
  }
  function row3dot(){
    var dot3 = document.createElement("div");
             thirdrow2.appendChild(dot3);
             dot3.classList.add("dot");
  }
  function row2dot5(){
    var dot2 = document.createElement("div");
             secondrow2.appendChild(dot2);
             dot2.classList.add("dot");
  secondrow2.classList.add("dot5");
    secondrow2.classList.remove("secondrow");
  }
  switch(dotNum2){
    case 1 : row2dot5();
              break;
    case 2 :
            row1dot();
            row3dot();
                break;
    case 3 : row1dot();
            row2dot5();
            row3dot();
                break;
    case 4 : row1dot(); row1dot();
            row3dot(); row3dot();
                break;
    case 5 : row1dot(); row1dot();
            row2dot5();
            row3dot();row3dot();
            break;
    case 6 :row1dot(); row1dot();
            row2dot(); row2dot();
            row3dot();row3dot();
            break;
  }

}
//title change
function titlechange(dotNum,dotNum2){
  const title = document.querySelector(".welcometitle");
  const player1= document.querySelector(".player1 input").value;
  const player2= document.querySelector(".player2 input").value;
  if(dotNum === dotNum2){
    title.textContent = "DRAW!!";
  }else if(dotNum > dotNum2){

    title.innerHTML= `🚩${player1.toUpperCase()}  Wins !!`;

  }else {

    title.innerHTML = `${player2.toUpperCase()} Wins !!🚩`;

  }
}
//real game

function game(){
 const dotNum = Math.floor(Math.random()*6 + 1);
 const dotNum2 = Math.floor(Math.random()*6 + 1);
  changedice1(dotNum);
  changedice2(dotNum2);
  titlechange(dotNum,dotNum2);
}
diceButton.addEventListener("click", game);
