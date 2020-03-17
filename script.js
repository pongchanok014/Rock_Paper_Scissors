let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

let moves = ['Rock' , 'Paper' , 'Scissors'];
let userMove;
let computerMove;

let userPoint = 0;
let computerPoint = 0;

rock.onclick = () =>{
  userMove = 'Rock';
  computerMove = Math.floor(Math.random() * (moves.length));
  document.getElementById('computerMove').innerText = "Computer Choose : " + moves[computerMove];
  if (userMove === moves[computerMove]){
    document.getElementById('winner').innerText = "This game was a tie!";
    document.getElementById('userPoint').innerText = "User Point : " + userPoint;
    document.getElementById('computerPoint').innerText = "Computer Point : " + computerPoint;
  } else if (moves[computerMove] === 'Paper'){
    document.getElementById('winner').innerText = "Computer Win!";
    computerPoint++;
    document.getElementById('userPoint').innerText = "User Point : " + userPoint;
    document.getElementById('computerPoint').innerText = "Computer Point : " + computerPoint;
  } else if (moves[computerMove] === 'Scissors') {
    document.getElementById('winner').innerText = "You Win!";
    userPoint++;
    document.getElementById('userPoint').innerText = "User Point : " + userPoint;
    document.getElementById('computerPoint').innerText = "Computer Point : " + computerPoint;
  }

}
paper.onclick = () =>{
  userMove = 'Paper';
  computerMove = Math.floor(Math.random() * (moves.length));
  document.getElementById('computerMove').innerText = "Computer Choose : " + moves[computerMove];
  if (userMove === moves[computerMove]){
    document.getElementById('winner').innerText = "This game was a tie!";
    document.getElementById('userPoint').innerText = "User Point : " + userPoint;
    document.getElementById('computerPoint').innerText = "Computer Point : " + computerPoint;
  } else if (moves[computerMove] === 'Scissors'){
    document.getElementById('winner').innerText = "Computer Win!";
    computerPoint++;
    document.getElementById('userPoint').innerText = "User Point : " + userPoint;
    document.getElementById('computerPoint').innerText = "Computer Point : " + computerPoint;
  } else if (moves[computerMove] === 'Rock') {
    document.getElementById('winner').innerText = "You Win!";
    userPoint++;
    document.getElementById('userPoint').innerText = "User Point : " + userPoint;
    document.getElementById('computerPoint').innerText = "Computer Point : " + computerPoint;
  }

}
scissors.onclick = () =>{
  userMove = 'Scissors';
  computerMove = Math.floor(Math.random() * (moves.length));
  document.getElementById('computerMove').innerText = "Computer Choose : " + moves[computerMove];
  if (userMove === moves[computerMove]){
    document.getElementById('winner').innerText = "This game was a tie!";
    document.getElementById('userPoint').innerText = "User Point : " + userPoint;
    document.getElementById('computerPoint').innerText = "Computer Point : " + computerPoint;
  } else if (moves[computerMove] === 'Rock'){
    document.getElementById('winner').innerText = "Computer Win!";
    computerPoint++;
    document.getElementById('userPoint').innerText = "User Point : " + userPoint;
    document.getElementById('computerPoint').innerText = "Computer Point : " + computerPoint;
  } else if (moves[computerMove] === 'Paper'){
    document.getElementById('winner').innerText = "You Win!";
    userPoint++;
    document.getElementById('userPoint').innerText = "User Point : " + userPoint;
    document.getElementById('computerPoint').innerText = "Computer Point : " + computerPoint;
  }
}

document.getElementById('reset').onclick = () => {
  userPoint = 0;
  computerPoint = 0;
  document.getElementById('userPoint').innerText = "User Point : " + 0;
  document.getElementById('computerPoint').innerText = "Computer Point : " + 0;
}
