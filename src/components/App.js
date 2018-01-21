import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import CanvasGrid from './CanvasGrid'
import Row, { RowShape } from './Row'
import * as GameActions from '../actions/gameActions'

import '../styles/mainStyles.css'

const App = (props) => (
  <div>
    <div>
      <Row
        data={props.canvasReducer}
        toggle={props.actions.toggle}
      />
    </div>
    <div>
      <CanvasGrid
        actions={props.actions}
        gameControls={props.gameControlsReducer}
      />
    </div>
  </div>
)

App.propTypes = {
  canvasReducer: RowShape.isRequired,
  gameControlsReducer: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return { ...state }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(GameActions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
