import RenderSquare from "../components/RenderSquare";
import { useState } from "react";

const Board = () => {

  const [squares, setSquares] = useState(Array(9).fill(null))

  const status = 'Next player: X';


  return (
    <>
        <div className="status">{status}</div>
        <div className="board-row">
          <RenderSquare value={squares[0]}/>
          <RenderSquare value={squares[1]}/>
          <RenderSquare value={squares[2]}/>
        </div>
        <div className="board-row">
          <RenderSquare value={squares[3]}/>
          <RenderSquare value={squares[4]}/>
          <RenderSquare value={squares[5]}/>
        </div>
        <div className="board-row">
          <RenderSquare value={squares[6]}/>
          <RenderSquare value={squares[7]}/>
          <RenderSquare value={squares[8]}/>
        </div>
    </>
  )
}

export default Board;