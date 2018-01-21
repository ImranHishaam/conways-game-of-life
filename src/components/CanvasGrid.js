import React from 'react'
import PropTypes from 'prop-types'
import { pure } from 'recompose'

const gliderGun = (props) => {
  const { actions, gameControls } = props
  console.log("apple", gameControls.startedAt)
  if (gameControls.startedAt) {
    return stopGame(props)
  }

  actions.startGame(Date.now())
  startGame(actions.cellClicked)
}

const startGame = (tick) => tick({
  frameId: window.requestAnimationFrame(() => startGame(tick)),
  now: Date.now()
})

const stopGame = (props) => {
  const { actions, gameControls } = props

  window.cancelAnimationFrame(gameControls.frameId)
  actions.stopGame(props)
}

const resetGame = (props) => {
  const { actions, gameControls } = props

  if (gameControls.startedAt) {
    stopGame(props)
  }
  actions.resetGame()
}

const randomGenerator = (actions) => actions.random()

const CanvasGrid = (props) => {

  const { actions } = props

  return (
    <div className='canvas-controls'>
      <div className='btn-group' role='group'>
        <button className='btn btn-danger' onClick={() => resetGame(props)}>
          Reset
          </button>
        <button className='btn btn-success' onClick={() => randomGenerator(actions)} >
          Randomize
          </button>
        <button onClick={() => gliderGun(props)}>
          Glider Gun
        </button>
      </div>

    </div>
  )
}

CanvasGrid.propTypes = {
  gameControls: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

// Pure is used to maintain the funtional paradigm to make CanvasGrid a Pure Component
export default pure(CanvasGrid)