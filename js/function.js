'use strict'
//セルのID
const tableElements = [id_1, id_2, id_3, id_4, id_5, id_6, id_7, id_8, id_9];

//勝ちパターン
const winPattern = [
[id_1, id_2, id_3],[id_4, id_5, id_6],[id_7, id_8, id_9],
[id_1, id_4, id_7],[id_2, id_5, id_8],[id_3, id_6, id_9],
[id_1, id_5, id_9],[id_3, id_5, id_7]];

const table__td = document.getElementsByClassName("table__td");
const tableTdArray = Array.prototype.slice.call(table__td);//配列に変換

let clickedCount = 0;
let circleCount = 0;
let crossCount = 0;
let isGameOver = false;

//勝ち判定の関数
function winJudgement(){

  for(let j = 0; j<winPattern.length; j++){

    if(winPattern[j][0].innerHTML==="◯"&&winPattern[j][1].innerHTML==="◯"&&winPattern[j][2].innerHTML==="◯"){
      document.getElementById('message').textContent = "勝者は「◯」です！！！";
      for(let k = 0; k<3; k++){
        winPattern[j][k].classList.remove('reset');
        winPattern[j][k].classList.remove('winCross');
        winPattern[j][k].classList.add('winCircle');
      }
      isGameOver = true;
      return '◯';
    }else if(winPattern[j][0].innerHTML==="×"&&winPattern[j][1].innerHTML==="×"&&winPattern[j][2].innerHTML==="×"){
      document.getElementById('message').textContent = "勝者は「×」です！！！";
      for(let k = 0; k<3; k++){
        winPattern[j][k].classList.remove('reset');
        winPattern[j][k].classList.remove('winCircle');
        winPattern[j][k].classList.add('winCross');
      }
      isGameOver = true;
      return '×';
    } 
  }
  //引き分け判定
  if((!isGameOver&&circleCount>=5) || (!isGameOver&&crossCount>=5)){
    document.getElementById('message').textContent = "引き分けです！！！";
    isGameOver = true;
    return 'Draw';
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
      //ゲームの決着がついている時はリターン
      if(isGameOver){
        return;
      }
      //セルが空のときにのみ◯×がつく。すでに入ってる時はアラート
      if(tableElements[i].innerHTML){
        alert("1回入力したら変更できません");
        return;
      }

        clickedCount++;


        if(clickedCount%2 === 1){
          //◯を入れる
          tableElements[i].innerHTML = "◯";
          circleCount++;
          //◯×のターンを切り替える
          const cross = document.getElementById("cross");
          cross.classList.add('active');
          const circle = document.getElementById("circle");
          circle.classList.remove('active');
        } else {
          //×を入れる
          tableElements[i].innerHTML = "×";
          crossCount++;
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
      isGameOver = false;
      clickedCount = 0;
      circleCount = 0;
      crossCount = 0;
      tableElements[i].innerHTML = "";
      tableElements[i].classList.add('reset');
      document.getElementById("message").textContent = "starting...";
    });
  }
  //上記関数を実行する
  handleClick();
  reset();
}







