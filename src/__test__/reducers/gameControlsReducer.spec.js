import GameControlsReducer from '../../reducers/gameControlsReducer'
import * as types from '../../constants/ActionTypes'

describe('>>>R E D U C E R --- Test Game Controls Reducer',()=>{
    it('+++ reducer for STOP GAME', () => {
        let state = { }
        state = GameControlsReducer(state,{type:types.STOP_GAME})
        expect(state).toEqual({ frameId: null, startedAt: null, ticks: 0 })
    });

    it('+++ reducer for START GAME', () => {
        const date = Date.now()
        let state = {}
        state = GameControlsReducer(state,{type:types.START_GAME, payload: date})
        expect(state).toEqual({startedAt:date})
    });

    it('+++ reducer for CELL CLICKED', () => {
        const date = Date.now()
        let state = {frameId: null, startedAt: null, ticks: 0}
        state = GameControlsReducer(state,{type:types.CELL_CLICKED, payload: {frameId:129, now: date}})
        expect(state).toEqual({frameId:129, startedAt:null, ticks: 1})
    });


});


