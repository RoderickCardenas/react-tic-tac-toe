import Board from "./Board"

const GameBoard = () => {
    return (
    <>
      <div className="game-board">
        <Board/>
      </div>
  <div className="game-info">
    <div>{/* status */}</div>
    <ol>{/* TODO */}</ol>
  </div>
  </>
  )
}

export default GameBoard