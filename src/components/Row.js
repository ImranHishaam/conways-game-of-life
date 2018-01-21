import React from 'react'
import PropTypes from 'prop-types'

import Cell from './Cell'

const renderTile = (toggle, y) => (alive, x) => (
  <Cell
    key={x}
    alive={alive}
    toggle={(alive) => toggle({
      coordinates: { y, x },
      current: alive
    })}
  />
)

const renderRow = (toggle) => (row, y) => (
  <div className='canvas-row' key={y}>
    {row.map(renderTile(toggle, y))}
  </div>
)

const Row = ({ data, toggle }) => (
  <div className='canvas'>
    {data.map(renderRow(toggle))}
  </div>
)

export const RowShape = PropTypes.arrayOf(
  PropTypes.arrayOf(PropTypes.bool)
)

Row.propTypes = {
  data: RowShape.isRequired,
  toggle: PropTypes.func.isRequired
}

export default Row