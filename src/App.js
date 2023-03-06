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
// [0] of math.floor sets to whole numbers and math.random will be the length of the array being used. * board.length
// this randomizer is built to be dynamic and scalable
    const [treasureLocation, setTreasureLocation] = useState(Math.floor(Math.random() * board.length))

    const [bombLocation, setBombLocation] = useState(Math.floor(Math.random() * board.length))

// console.log("Treasure:", treasureLocation);
// console.log("Bomb:", bombLocation);

    const handleGamePlay = (index) => {
        // alert (index)
        let updatedBoard = [...board]
        //emoji keboard: cmd + ctrl + space

        if(index === treasureLocation) {
            updatedBoard[index] = '👑'
            setBoard(updatedBoard)
        } else if (index === bombLocation) {
            updatedBoard[index] = '🏴‍☠️'
            setBoard(updatedBoard)
        } else {
            updatedBoard[index] = '🌲'
            setBoard(updatedBoard)
        }
    }
// value is being passed through Square as props
// key={index} is only used in react when iterating over something
// if more than 1 parameter passed through {board.map()} an extra set of () needed around the parameters
// best practice to keep key={index} seperate from index={index}. Espesully when destructuring.
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
