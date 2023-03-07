import React from "react"

const Square = ({value}) => { //destructuring props.value to {value}
  return (
    <>
      <div className="square">
        {value}
      </div>
    </>
  )
}
export default Square