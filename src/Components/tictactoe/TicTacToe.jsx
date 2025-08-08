import './TicTacToe.css'
import circle from '../Assets/circle.png'
import cross from '../Assets/cross.png'
import { useRef, useState } from 'react'

let data = ["","","","","","","","",""]

function TicTacToe() {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const [winner, setWinner] = useState("");

  const ref = useRef();
  const toggle = (e,num) => {
    if(lock){
      return 0;
    }
    if(count%2 === 0){
      e.target.innerHTML = `<img src=${circle} />`
      data[num] ='o'
      setCount(count+1);
    }else{
      e.target.innerHTML = `<img src=${cross}>`
      data[num] = 'x'
      setCount(count+1);
    }
    checkWin();
  }

  const checkWin = () => {
    if(data[0] == data[1] && data[1] == data[2] &&  data[2] != "" ){
      win(data[0]);
    }else if(data[3] == data[4] && data[4] == data[5] &&  data[3] != "" ){
      win(data[3]);
    }else if(data[6] == data[7] && data[7] == data[8] &&  data[7] != "" ){
      win(data[6]);
    }else if(data[0] == data[3] && data[3] == data[6] &&  data[6] != "" ){
      win(data[6]);
    }else if(data[0] == data[4] && data[4] == data[8] &&  data[8] != "" ){
      win(data[8]);
    }else if(data[1] == data[7] && data[7] == data[4] &&  data[7] != "" ){
      win(data[1]);
    }else if(data[2] == data[5] && data[8] == data[5] &&  data[5] != "" ){
      win(data[5]);
    }else if(data[6] == data[4] && data[2] == data[4] &&  data[4] != "" ){
      win(data[6]);
    }
  }

  const win = (champ) => {
    setLock(true);
    // if(winner == 'x'){
    //    ref.current.innerHTML = `Congrats to <img src=${cross}/> for winning the game`
    // }else if(winner == 'o'){
    //    ref.current.innerHTML = `Congrats to <img src=${circle}/> for winning the game`
    // }
    setWinner(champ)
  }

  const reset = () => {
    setLock(false)
    data.fill("");
    setWinner("");
  }
  return (
    <form >
    <div className='container'>
      <h1 className="title" ref={ref}>{
        winner === "" ? "Tic Tac Toe Game": (
          <>
            <img src={winner === 'x'? cross : circle}/> won 
          </>
        )
      }</h1>
      <div className="board">
        <div className="row1">
          <div className="boxes" onClick={(e) => {toggle(e, 0)}}></div>
          <div className="boxes" onClick={(e) => {toggle(e, 1)}}></div>
          <div className="boxes" onClick={(e) => {toggle(e, 2)}}></div>
        </div>
        <div className="row2">
          <div className="boxes" onClick={(e) => {toggle(e, 3)}}></div>
          <div className="boxes" onClick={(e) => {toggle(e, 4)}}></div>
          <div className="boxes" onClick={(e) => {toggle(e, 5)}}></div>
        </div>
        <div className="row3">
          <div className="boxes" onClick={(e) => {toggle(e, 6)}}></div>
          <div className="boxes" onClick={(e) => {toggle(e, 7)}}></div>
          <div className="boxes" onClick={(e) => {toggle(e, 8)}}></div>
        </div>
      </div>
      <button className="reset" onClick={() => { reset()}}>Reset</button>
    </div>
    </form>
    
  )
}

export default TicTacToe;