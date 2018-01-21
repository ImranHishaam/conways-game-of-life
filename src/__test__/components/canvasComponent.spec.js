import 'jsdom-global/register'

import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import * as actions from '../../actions/gameActions'
import * as types from '../../constants/ActionTypes'
import rootReducer from '../../reducers'

import App from '../../components/App'
import CanvasGrid from '../../components/CanvasGrid'
import Row from '../../components/Row'
import Cell from '../../components/Cell'

import canvasReducer from '../../reducers/canvasReducer'

// Snapshot for Initial React Component
describe('>>>Initial View --- Snapshot', () => {
    it('+++capturing Snapshot of Initial View', () => {
        const store = createStore(rootReducer)
        const renderedValue = renderer.create(<Provider store={store}><App /></Provider>).toJSON()
        expect(renderedValue).toMatchSnapshot();
    });

});

test('Canvas component number of cells on a row', () => {

    const store = createStore(rootReducer)
    const wrapper = mount(
        <Provider store={store}><App /></Provider>
    );
    const canvas_row = wrapper.find('.canvas-row');
    expect(canvas_row.length).toBe(types.CANVAS_SIZE);
});

describe('>>>H O M E --- REACT-REDUX actual Store + reducers', () => {
    const initialState = { output: 10 }
    let store, wrapper

    beforeEach(() => {
        store = createStore(rootReducer)
        wrapper = mount(<Provider store={store}><App /></Provider>)
    })

    it('+++ render the connected(SMART) component', () => {
        expect(wrapper.find(App).length).toEqual(1)
    });

    it('+++ check Prop matches with on Canvas Grid', () => {
        const state = { frameId: null, startedAt: null, ticks: 0 }
        expect(wrapper.find(CanvasGrid).prop('gameControls')).toEqual(state)
    });

    it('+++ check Prop matches with Row Component', () => {
        const state = store.getState().canvasReducer
        expect(wrapper.find(Row).prop('data')).toEqual(state)
    });

});