import './Box.scss'
import { useState } from 'react'

const Box = props => {
    const [boxCoordinate, setBoxCoordinate] = useState({
        xIndex: props.position[0],
        yIndex: props.position[1]
    })

    return (
        <button className="box" onClick={()=> props.onBoxClick(boxCoordinate)}></button>
    )
}

export default Box