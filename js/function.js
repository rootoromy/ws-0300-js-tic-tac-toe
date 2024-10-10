'use strict'
//セルのID
const tableIds = [id_1, id_2, id_3, id_4, id_5, id_6, id_7, id_8, id_9];

//勝ちパターン
const winResult = [
[id_1, id_2, id_3],[id_4, id_5, id_6],[id_7, id_8, id_9],
[id_1, id_4, id_7],[id_2, id_5, id_8],[id_3, id_6, id_9],
[id_1, id_5, id_9],[id_3, id_5, id_7]];

let clickedCount = 0;

//勝ち判定の関数
function winJudgement(){
  for(let j = 0; j<winResult.length; j++){

    if(winResult[j][0].innerHTML==="◯"&&winResult[j][1].innerHTML==="◯"&&winResult[j][2].innerHTML==="◯"){
      document.getElementById('message').textContent = "勝者は「◯」です！！！";
      for(let k = 0; k<3; k++){
        document.getElementById(winResult[j][k].id).style.backgroundColor = 'yellow';
      }
    }else if(winResult[j][0].innerHTML==="×"&&winResult[j][1].innerHTML==="×"&&winResult[j][2].innerHTML==="×"){
      document.getElementById('message').textContent = "勝者は「×」です！！！";
      for(let k = 0; k<3; k++){
        document.getElementById(winResult[j][k].id).style.backgroundColor = 'Skyblue';
      }
    }
  }
}

for(let i = 0; i < tableIds.length; i++){
  //クリックしたら交互に◯×を出すようにする関数
  function clickAndChange() {
    //◯×のターンは、◯が先行
    const circle = document.getElementById("circle");
    circle.classList.add('active');
    const cross = document.getElementById("cross");
    cross.classList.remove('active');

    tableIds[i].addEventListener("click", (e)=>{
      //セルが空のときにのみ◯×がつく。すでに入ってる時はアラート
      if(!tableIds[i].innerHTML){
        clickedCount++;


        if(clickedCount%2 === 1){
          //◯を入れる
          tableIds[i].innerHTML = "◯";
          //◯×のターンを切り替える
          const cross = document.getElementById("cross");
          cross.classList.add('active');
          const circle = document.getElementById("circle");
          circle.classList.remove('active');
        } else {
          //×を入れる
          tableIds[i].innerHTML = "×";
          //◯×のターンを切り替える
          const circle = document.getElementById("circle");
          circle.classList.add('active');
          const cross = document.getElementById("cross");
          cross.classList.remove('active');
        }
      }else{
        alert("1回入力したら変更できません");
      }
      //勝ち判定の関数を実行
      winJudgement();
    });
  }
  //クリックしたらリセットする関数
  function reset(){
    button.addEventListener("click", ()=>{
      console.log("押された");
      tableIds[i].innerHTML = "";
      tableIds[i].style.backgroundColor = 'transparent';
      document.getElementById("message").textContent = "starting...";
    });
  }
  //上記関数を実行する
  clickAndChange();
  reset();
}






