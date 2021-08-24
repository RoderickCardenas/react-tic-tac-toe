import { useState, useEffect } from "react";

const RenderSquare = (props) => {

  const [originalValue, setValue] = useState(null)

  useEffect(() => setValue(props.value),[props.value])

  return (
    <button className="square" onClick={() => setValue("X")}>
      {originalValue}
    </button>
  );
}

export default RenderSquare