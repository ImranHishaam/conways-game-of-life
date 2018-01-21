import CanvasReducer from '../../reducers/canvasReducer'
import * as types from '../../constants/ActionTypes'
import { randomizer, makeCanvas, toggle, makeBlankCanvas } from '../../utils/gameUtils'


describe('>>>R E D U C E R --- Test Canvas Reducers',()=>{
    it('+++ reducer for CELL CLICKED', () => {
        let state = makeCanvas(randomizer, types.CANVAS_SIZE)
        state = CanvasReducer(state,{type:types.CELL_CLICKED,payload:state})
        expect(state).toEqual(state)
    });

    it('+++ reducer for RANDOM GENERATOR', () => {
        let state = makeCanvas(randomizer, types.CANVAS_SIZE)
        state = CanvasReducer(state,{type:types.RANDOM_GENERATOR, })
        expect(state).toEqual(state)
    });

    it('+++ reducer for RESET', () => {
        let state = makeBlankCanvas(types.CANVAS_SIZE, types.CANVAS_SIZE)
        state = CanvasReducer(state,{type:types.RESET_GAME })
        expect(state).toEqual(state)
    });
});


