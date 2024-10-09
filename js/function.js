'use strict'

const id_1 = document.getElementById("id_1");

document.getElementById("id_1").disabled = true;

const tableIds = [id_1, id_2, id_3, id_4, id_5, id_6, id_7, id_8, id_9];

let clickedCount = 0;

for(let i = 0; i < tableIds.length; i++){
  //クリックしたら交互に◯×を出すようにする
  function clickAndChange() { 
    const markCell = tableIds[i].addEventListener("click", (e)=>{
      clickedCount++;
      clickedCount%2 === 1 ? tableIds[i].innerHTML = "◯" : tableIds[i].innerHTML = "×";
    });
  }
  clickAndChange();
}

