import React from "react"

const Square = ({value, index, handleGamePlay}) => { //destructuring props.value to {value}. can separate multiple props by a comma.
  // if just modifying the child component just pass the logic through  on the child component
  // if it is needed else where, this about where the best place is with the path of least resistance.
  // can setup at the component level for testing but can move as needed to a more central location

  // using handleClick (a function) to trigger another function (handleGamePlay)
  // the alert was initially set up in Square.js to test, then moved to app.js. Functions as designed since alert functions correctly from app.js

    const handleClick = () => {
        handleGamePlay(index) 
    }
    
        return (
        <>
        <div className="square" onClick={handleClick}>
            {value}
        </div>
        </>
    )
}
export default Square
