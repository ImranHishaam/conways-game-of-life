import * as types from '../constants/ActionTypes'

const initialState = {
  frameId: null,
  startedAt: null,
  ticks: 0
}

const gameControlsReducer = (state = initialState, action, payload) =>{
  switch(action.type) {
    case types.STOP_GAME:
      return initialState
    case types.START_GAME:
     return {
      ...state,
      startedAt: action.payload
    }
    case types.CELL_CLICKED:
      return {
        ...state,
        ticks: state.ticks + 1,
        frameId: action.payload.frameId
      }
    default:
      return state;
  }
}

export default gameControlsReducer