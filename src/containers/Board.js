import RenderSquare from "../components/RenderSquare";

const Board = () => {

  const status = 'Next player: X';


  return (
    <>
        <div className="status">{status}</div>
        <div className="board-row">
          <RenderSquare number={0}/>
          <RenderSquare number={1}/>
          <RenderSquare number={2}/>
        </div>
        <div className="board-row">
          <RenderSquare number={3}/>
          <RenderSquare number={4}/>
          <RenderSquare number={5}/>
        </div>
        <div className="board-row">
          <RenderSquare number={6}/>
          <RenderSquare number={7}/>
          <RenderSquare number={8}/>
        </div>
    </>
  )
}

export default Board;