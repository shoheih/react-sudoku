/**
 * Return a random sudoku grid idnex in the 0 - 8 range
 */
function getRandomIndex() {
  return Math.floor(Math.random() * Math.floor(9));
}

export default getRandomIndex;
