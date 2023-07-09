function getTextAndSetList(nameId, buttonId) {
    const player = document.getElementById(nameId);
    const playerName = player.innerText;
  
    const list = document.querySelectorAll("li");
    const disableButton = document.getElementById(buttonId);
  
    if (list[0].innerText == "") {
      list[0].innerText = playerName;
      disableButton.setAttribute("disabled", "true");
    } else if (list[1].innerText == "") {
      list[1].innerText = playerName;
      disableButton.setAttribute("disabled", "true");
    } else if (list[2].innerText == "") {
      list[2].innerText = playerName;
      disableButton.setAttribute("disabled", "true");
    } else if (list[3].innerText == "") {
      list[3].innerText = playerName;
      disableButton.setAttribute("disabled", "true");
    } else if (list[4].innerText == "") {
      list[4].innerText = playerName;
      disableButton.setAttribute("disabled", "true");
    } else {
      alert("You can't choose more than 5");
    }
  }


  document.getElementById("button-1").addEventListener("click", function () {
    getTextAndSetList("player-1", "button-1");
  });
  document.getElementById("button-2").addEventListener("click", function () {
    getTextAndSetList("player-2", "button-2");
  });
  document.getElementById("button-3").addEventListener("click", function () {
    getTextAndSetList("player-3", "button-3");
  });
  document.getElementById("button-4").addEventListener("click", function () {
    getTextAndSetList("player-4", "button-4");
  });
  document.getElementById("button-5").addEventListener("click", function () {
    getTextAndSetList("player-5", "button-5");
  });
  document.getElementById("button-6").addEventListener("click", function () {
    getTextAndSetList("player-6", "button-6");
  });
  document.getElementById("button-7").addEventListener("click", function () {
    getTextAndSetList("player-7", "button-7");
  });
  document.getElementById("button-8").addEventListener("click", function () {
    getTextAndSetList("player-8", "button-8");
  });
  document.getElementById("button-9").addEventListener("click", function () {
    getTextAndSetList("player-9", "button-9");
  });




// const list = document.querySelectorAll('li');

// document.getElementById('button-1').addEventListener('click',function(){
//    const player = document.getElementById('player-1');
//    const playerName = player.innerText;
//    list[0].innerText = playerName
     
// })

// document.getElementById('button-2').addEventListener('click',function(){
//    const player = document.getElementById('player-2');
//    const playerName = player.innerText;
//    list[1].innerText = playerName
     
// })

// document.getElementById('button-3').addEventListener('click',function(){
//    const player = document.getElementById('player-3');
//    const playerName = player.innerText;
//    list[2].innerText = playerName
     
// })

// document.getElementById('button-4').addEventListener('click',function(){
//    const player = document.getElementById('player-4');
//    const playerName = player.innerText;
//    list[3].innerText = playerName
     
// })

// document.getElementById('button-5').addEventListener('click',function(){
//    const player = document.getElementById('player-5');
//    const playerName = player.innerText;
//    list[4].innerText = playerName
     
// })

// document.getElementById('button-6').addEventListener('click',function(){
//    const player = document.getElementById('player-6');
//    const playerName = player.innerText;
//    list[5].innerText = playerName
     
// })

// document.getElementById('button-7').addEventListener('click',function(){
//     const player = document.getElementById('player-7');
//     const playerName = player.innerText;
//     list[6].innerText = playerName
      
//  })

//  document.getElementById('button-8').addEventListener('click',function(){
//     console.log('click')
//     const player = document.getElementById('player-8');
//     const playerName = player.innerText;
//     list[7].innerText = playerName
      
//  })

//  document.getElementById('button-9').addEventListener('click',function(){
//     console.log('click')
//     const player = document.getElementById('player-9');
//     const playerName = player.innerText;
//     list[8].innerText = playerName
      
//  })
