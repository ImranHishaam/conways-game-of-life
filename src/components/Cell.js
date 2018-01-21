import React from 'react'
import PropTypes from 'prop-types'

const onMouseEvent = (toggle, alive) => (e) => {
  if (e.nativeEvent.which !== 1) { return }
  toggle(alive)
}

const Cell = ({ alive, toggle, color = '#FFF' }) => (
  <div className='each-cell'
    onMouseOver={onMouseEvent(toggle, alive)}
    onMouseDown={onMouseEvent(toggle, alive)}
    style={{ backgroundColor: alive ? color : null }}
  />
)

Cell.propTypes = {
  alive: PropTypes.bool,
  toggle: PropTypes.func,
  color: PropTypes.string
}

export default Cell

