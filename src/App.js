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
// value is being passed through Square as props
// key={index} is only used in react when iterating over something
// if more than 1 parameter passed through {board.map()} an extra set of () needed around the parameters
// 
    return (
        <>
            <h1>Treasure Hunt Game</h1>
            
            <div className="gameboard">
                {board.map((value, index) => {
                    return (
                        <Square 
                            value={value} 
                            key={index}
                        />
                    )
                })}
            </div>
            
        </>
    )
}

export default App
