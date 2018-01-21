import * as types from '../constants/ActionTypes'

export const startGame = (initialData) => {
    return {
        type: types.START_GAME,
        payload: initialData
    }
}

export const stopGame = () => {
    return {
        type: types.STOP_GAME
    }
}

export const resetGame = () => {
    return {
        type: types.RESET_GAME
    }
}

export const random = () => {
    return {
        type: types.RANDOM_GENERATOR
    }
}

export const cellClicked = (eachFrameData) => {
    return {
        type: types.CELL_CLICKED,
        payload: eachFrameData
    }
}

export const toggle = (onToggle) => {
    return {
        type: types.TOGGLE_GAME,
        payload: onToggle
    }
}