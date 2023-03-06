import React, { useState } from "react"
import Square from "./components/Square"

import "./App.css"

const App = () => {
    const [board, setBoard] = useState([
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?",
        "?"
    ])

    const handleGamePlay = (index) => {
        // alert (index)
        let updatedBoard = [...board]
        //emoji keboard: cmd + ctrl + space
        updatedBoard[index] = '🌲'
        setBoard(updatedBoard)
    }
// value is being passed through Square as props
// key={index} is only used in react when iterating over something
// if more than 1 parameter passed through {board.map()} an extra set of () needed around the parameters
// best practice to keep key={index} seperate from index={index}. Especually when destructuring.
    return (
        <>
            <h1>Treasure Hunt Game</h1>
            
            <div className="gameboard">
                {board.map((value, index) => {
                    return (
                        <Square 
                            value={value} 
                            key={index}
                            index={index}
                            handleGamePlay={handleGamePlay}
                        />
                    )
                })}
            </div>
            
        </>
    )
}

export default App
