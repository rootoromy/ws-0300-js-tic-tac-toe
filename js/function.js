'use strict'
//セルのID
const tableElements = [id_1, id_2, id_3, id_4, id_5, id_6, id_7, id_8, id_9];

//勝ちパターン
const winPattern = [
[id_1, id_2, id_3],[id_4, id_5, id_6],[id_7, id_8, id_9],
[id_1, id_4, id_7],[id_2, id_5, id_8],[id_3, id_6, id_9],
[id_1, id_5, id_9],[id_3, id_5, id_7]];

let clickedCount = 0;

//勝ち判定の関数
function winJudgement(){
  for(let j = 0; j<winPattern.length; j++){

    if(winPattern[j][0].innerHTML==="◯"&&winPattern[j][1].innerHTML==="◯"&&winPattern[j][2].innerHTML==="◯"){
      document.getElementById('message').textContent = "勝者は「◯」です！！！";
      for(let k = 0; k<3; k++){
        winPattern[j][k].classList.add('winCircle');
      }
    }else if(winPattern[j][0].innerHTML==="×"&&winPattern[j][1].innerHTML==="×"&&winPattern[j][2].innerHTML==="×"){
      document.getElementById('message').textContent = "勝者は「×」です！！！";
      for(let k = 0; k<3; k++){
        winPattern[j][k].classList.add('winCross');
      }
    }
  }
}

for(let i = 0; i < tableElements.length; i++){
  //クリックしたら交互に◯×を出すようにする関数
  function handleClick() {
    //◯×のターンは、◯が先行
    //const circle = document.getElementById("circle");
    //circle.classList.add('active');
    //const cross = document.getElementById("cross");
    //cross.classList.remove('active');

    tableElements[i].addEventListener("click", (e)=>{
      //セルが空のときにのみ◯×がつく。すでに入ってる時はアラート
      if(tableElements[i].innerHTML){
        alert("1回入力したら変更できません");
        return;
      }
        clickedCount++;


        if(clickedCount%2 === 1){
          //◯を入れる
          tableElements[i].innerHTML = "◯";
          //◯×のターンを切り替える
          const cross = document.getElementById("cross");
          cross.classList.add('active');
          const circle = document.getElementById("circle");
          circle.classList.remove('active');
        } else {
          //×を入れる
          tableElements[i].innerHTML = "×";
          //◯×のターンを切り替える
          const circle = document.getElementById("circle");
          circle.classList.add('active');
          const cross = document.getElementById("cross");
          cross.classList.remove('active');
        }

      //勝ち判定の関数を実行
      winJudgement();
    });
  }
  //クリックしたらリセットする関数
  function reset(){
    button.addEventListener("click", ()=>{
      console.log("押された");
      tableElements[i].innerHTML = "";
      tableElements[i].style.backgroundColor = 'transparent';
      document.getElementById("message").textContent = "starting...";
    });
  }
  //上記関数を実行する
  handleClick();
  reset();
}






