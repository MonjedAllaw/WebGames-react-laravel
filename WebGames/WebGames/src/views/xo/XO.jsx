
import { useState } from 'react'
import './XO.css'

const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];


function Square(props){

  return <button className='xo_square' onClick={props.onSquareClick} >{props.value}</button>
}

function Grid({squares,handleClick}){
  return(
    
    <div id="xo_grid">
    <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
    <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
    <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
  
    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
    <Square value={squares[5]}onSquareClick={() => handleClick(5)} />
  
    <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
    <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
    <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
  </div>
  )
}



function XO(){
  const [squares,setSquares]= useState(Array(9).fill(null));
  const [xIsNext,setXIsNext]= useState(true);
  const [score,setScore]=useState( {X:0,O:0 });
  const [winner, setWinner] = useState(null);

  function calculateWinner(squares){
 
    for (let i =0; i<lines.length;i++){
      const [a,b,c]= lines[i];
      if(squares[a]&& squares[a]==squares[b] && squares[c]==squares[b]){
        return squares[a];
      }
    }
    return null;
  }
  

  function handleClick(i) {
 
    const nextSquares = squares.slice();
    if (winner || nextSquares[i]) {
      return;
    }
    
    nextSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  
    const newWinner = calculateWinner(nextSquares);
    if (newWinner) {
      setWinner(newWinner);
      const newScore = { ...score };
      newScore[newWinner] += 1;
      setScore(newScore);
    }
  }

  function handleNewGame(){
    setWinner(null);
    setSquares(Array(9).fill(null));

  }
  

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  
  return(<>
  <header className="game_header">
        <h1>Tic-Tac-Toe</h1>
    </header>
  <div className='xo_body'>
    
    <div className="score_board">
      <div className="badge" id="x_badge">X wins</div>
      <div className="badge" id="o_badge">O wins</div>
      <span id="x_score">{score.X}</span>:<span id="o_score">{score.O}</span>
    </div>
    <div className="status">{status}</div>
    <Grid squares={squares} handleClick={handleClick}></Grid>

      <div>
            <button id="play_button" onClick={handleNewGame}>Play again</button>
      </div>
     
   </div>
  
  </>
    
  )
}





export default XO