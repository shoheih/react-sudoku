import { NUMBERS } from 'typings';

/**
 * An array shuffling using the Fisher Yates shuffle alogorithm
 * @param array An array that you want shuffled
 */
function shuffle(array: NUMBERS[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

export default shuffle;
