
import * as actions from '../../actions/gameActions'
import * as types from '../../constants/ActionTypes'

describe('>>>A C T I O N --- Test Game Actions', () => {

    it('+++ actionCreator startGame action', () => {
        const date = Date.now()
        const startGame = actions.startGame(date)

        expect(startGame).toEqual({ type: types.START_GAME, payload: date })
    })

    it('+++ actionCreator stopGame action', () => {
        const stopGame = actions.stopGame()
        expect(stopGame).toEqual({ type: types.STOP_GAME })
    })

    it('+++ actionCreator resetGame action', () => {
        const resetGame = actions.resetGame()
        expect(resetGame).toEqual({ type: types.RESET_GAME })
    })

    it('+++ actionCreator random action', () => {
        const random = actions.random()
        expect(random).toEqual({ type: types.RANDOM_GENERATOR })
    })

    it('+++ actionCreator cellClicked action', () => {
        const testData = {
            frameId: Date.now(),
            now: Date.now()
        }
        
        const cellClicked = actions.cellClicked(testData)
        expect(cellClicked).toEqual({ type: types.CELL_CLICKED, payload: testData })
    })

    it('+++ actionCreator toggle action', () => {
        const testData = {
            coordinates: {
                x: 0,
                y: 1
            },
            current: false
        }
        const cellToggled = actions.toggle(testData)
        expect(cellToggled).toEqual({ type: types.TOGGLE_GAME, payload: testData })
    })

    it('+++ actionCreator toggle action FAIL', () => {
        const cellToggled = actions.toggle({})
        expect(cellToggled).toEqual({ type: types.TOGGLE_GAME })
    })

})