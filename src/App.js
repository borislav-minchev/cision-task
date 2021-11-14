import { useState } from 'react'
import './App.scss'
import Box from './Box'

function App() {
	const [turn, setTurn] = useState('circle')
	const xSize = 3
	const ySize = 3
	const gameField = []

	const onBoxClick = clickedBoxCoordinates => {
		setTurn(turn === 'circle' ? 'cross' : 'circle')
	}

	for (let yIndex = 1; yIndex <= ySize; yIndex++) {
		const row = []

		for (let xIndex = 1; xIndex <= xSize; xIndex++) {
			row.push(
				<Box key={`x${xIndex}y${yIndex}}`} position={[xIndex, yIndex]} onBoxClick={onBoxClick}></Box>
			)
		}

		const rowElement = <div key={`row${yIndex}`} className="box-row d-flex">{row}</div>

		gameField.push(rowElement)
	}

	return (
		<div className="App">
			<h1 className="player-turn">{turn}</h1>

			<div className="game-field d-flex">
				<div className="boxes">
					{gameField}
				</div>
			</div>
		</div>
	)
}

export default App
