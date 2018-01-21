import { combineReducers } from 'redux'
import canvasReducer from './canvasReducer'
import gameControlsReducer from './gameControlsReducer'

const rootReducer = combineReducers({
  canvasReducer,
  gameControlsReducer
})

export default rootReducer
