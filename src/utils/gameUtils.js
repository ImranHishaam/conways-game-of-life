import { curry, range, always } from 'ramda'

const FALSE = always(false)

export const randomizer = (y, x) => Math.random(x + y) > 0.8

export const makeCanvas = curry((cell, size) => {
  const r = range(0, size)
  return r.map((y) => r.map((x) => cell(y, x)))
})

export const makeBlankCanvas = makeCanvas(FALSE)

const setArrayValues = (i, value, xs) => [
  ...xs.slice(0, i),
  value,
  ...xs.slice(i + 1)
]

const newKeyGenerator = (size) => (key) => {
  if (key === -1) { return size - 1 }
  if (key === size) { return 0 }
  return key
}

const newKeysGenerator = (size, keys) =>
  keys.map(newKeyGenerator(size))

const mergePositions = ({ y, x }) =>
  [-1, 0, 1].reduce((a, $y, _, offset) =>
    offset.reduce((b, $x) =>
      ($x || $y) ? [...b, [y + $y, x + $x]] : b,
      a
    ),
    []
  )

const getIn = (canvas) => (position) =>
  (([y, x]) => canvas[y][x])(newKeysGenerator(canvas.length, position))

const getNeighbourPosition = (canvas, position) =>
  mergePositions(position)
    .map(getIn(canvas))
    .reduce((a, b) => a + b)

const willBeAlive = (isAlive, neighbours) => isAlive ? neighbours >= 2 && neighbours <= 3 : neighbours === 3

export const nextState = (canvas) => 
  canvas.map((row, y) =>
    row.map((column, x) =>
      willBeAlive(column, getNeighbourPosition(canvas, { y, x }))
    )
  )

export const toggle = ({ y, x }, current, canvas) => setArrayValues(y, setArrayValues(x, +!current, canvas[y]), canvas)
