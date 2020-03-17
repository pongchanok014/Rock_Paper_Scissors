let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');


let nextRound = document.getElementById('nextRound');
let reset= document.getElementById('reset')

let moves = ['Rock' , 'Paper' , 'Scissors'];
let userMove;
let computerMove;

let userPoint = 0;
let computerPoint = 0;

let pcImageShow = document.getElementById('pcImg');

nextRound.hidden = true;
reset.hidden = true;



let rps = [
  "https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000173/23262897-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg ",
  "https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000180/23262904-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg",
  "https://previews.123rf.com/images/julinzy/julinzy1310/julinzy131000181/23262905-hand-sign-of-rock-paper-scissors-game-isolated-vector-on-white-background.jpg"
];

rock.onclick = () =>{
  userMove = 'Rock';
  paper.hidden =true;
  scissors.hidden =true;
  computerMove = Math.floor(Math.random() * (moves.length));
  pcImageShow.src = rps[computerMove];
  if (userMove === moves[computerMove] ){
    document.getElementById('winner').innerText = "Result : This game was a tie!";
    document.getElementById('userPoint').innerText = "User Point : " + userPoint;
    document.getElementById('computerPoint').innerText = "Computer Point : " + computerPoint;
  } else if (moves[computerMove] === 'Paper'){
    document.getElementById('winner').innerText = "Result : Computer Win!";
    computerPoint++;
    document.getElementById('userPoint').innerText = "User Point : " + userPoint;
    document.getElementById('computerPoint').innerText = "Computer Point : " + computerPoint;
  } else if (moves[computerMove] === 'Scissors') {
    document.getElementById('winner').innerText = "Result : You Win!";
    userPoint++;
    document.getElementById('userPoint').innerText = "User Point : " + userPoint;
    document.getElementById('computerPoint').innerText = "Computer Point : " + computerPoint;
  }
  reset.hidden = false;
  setTimeout(() => nextRound.onclick(), 2500);
}

paper.onclick = () =>{
  userMove = 'Paper';
  rock.hidden =true;
  scissors.hidden =true;
  computerMove = Math.floor(Math.random() * (moves.length));
  pcImageShow.src = rps[computerMove];
  if (userMove === moves[computerMove]){
    document.getElementById('winner').innerText = "Result : This game was a tie!";
    document.getElementById('userPoint').innerText = "User Point : " + userPoint;
    document.getElementById('computerPoint').innerText = "Computer Point : " + computerPoint;
  } else if (moves[computerMove] === 'Scissors'){
    document.getElementById('winner').innerText = "Result : Computer Win!";
    computerPoint++;
    document.getElementById('userPoint').innerText = "User Point : " + userPoint;
    document.getElementById('computerPoint').innerText = "Computer Point : " + computerPoint;
  } else if (moves[computerMove] === 'Rock'){
    document.getElementById('winner').innerText = "Result : You Win!";
    userPoint++;
    document.getElementById('userPoint').innerText = "User Point : " + userPoint;
    document.getElementById('computerPoint').innerText = "Computer Point : " + computerPoint;
  }
  reset.hidden = false;
  setTimeout(() => nextRound.onclick(), 2500);
}
scissors.onclick = () =>{
  userMove = 'Scissors';
  paper.hidden =true;
  rock.hidden =true;
  computerMove = Math.floor(Math.random() * (moves.length));
  pcImageShow.src = rps[computerMove];
  if (userMove === moves[computerMove]){
    document.getElementById('winner').innerText = "Result : This game was a tie!";
    document.getElementById('userPoint').innerText = "User Point : " + userPoint;
    document.getElementById('computerPoint').innerText = "Computer Point : " + computerPoint;
  } else if (moves[computerMove] === 'Rock'){
    document.getElementById('winner').innerText = "Result : Computer Win!";
    computerPoint++;
    document.getElementById('userPoint').innerText = "User Point : " + userPoint;
    document.getElementById('computerPoint').innerText = "Computer Point : " + computerPoint;
  } else if (moves[computerMove] === 'Paper'){
    document.getElementById('winner').innerText = "Result : You Win!";
    userPoint++;
    document.getElementById('userPoint').innerText = "User Point : " + userPoint;
    document.getElementById('computerPoint').innerText = "Computer Point : " + computerPoint;
  }
  reset.hidden = false;
  setTimeout(() => nextRound.onclick(), 2500);

}

nextRound.onclick = () => { 
  paper.hidden =false;
  scissors.hidden =false;
  rock.hidden =false;
  pcImageShow.src = "https://image.flaticon.com/icons/png/512/36/36601.png"
  document.getElementById('winner').innerText = "Result : ";
  reset.hidden = false;
}

reset.onclick = () => {
  paper.hidden =false;
  scissors.hidden =false;
  rock.hidden =false;
  userPoint = 0;
  computerPoint = 0;
  document.getElementById('userPoint').innerText = "User Point : " + 0;
  document.getElementById('computerPoint').innerText = "Computer Point : " + 0;
  pcImageShow.src = "https://image.flaticon.com/icons/png/512/36/36601.png";
  document.getElementById('winner').innerText = "Result : ";
  reset.hidden = true;
}

