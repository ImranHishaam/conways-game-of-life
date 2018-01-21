
import * as types from '../constants/ActionTypes'
import { randomizer, makeCanvas, makeBlankCanvas, nextState, toggle } from '../utils/gameUtils'

const initialState = makeCanvas(randomizer, types.CANVAS_SIZE)

const canvasReducer = (state = initialState, action) =>{
  switch(action.type) {
    case types.CELL_CLICKED:
      return nextState(state)
    case types.TOGGLE_GAME:
     return toggle(action.payload.coordinates, action.payload.current, state)
    case types.RANDOM_GENERATOR:
      return makeCanvas(randomizer, types.CANVAS_SIZE)
    case types.RESET_GAME:
      return makeBlankCanvas(types.CANVAS_SIZE, types.CANVAS_SIZE)
    default:
      return state;
  }
}

export default canvasReducer