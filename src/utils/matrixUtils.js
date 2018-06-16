export const getMatrix = () => {
  let matrix = [];
  let blankPosition = [];
  let history = [];
  let values = (new Array(15)).fill(1).map((a, i) => i + 1);
  values.push('');
  values = shuffle(values);

  for (let i = 0; i < 4; i++) {
    let row = [];
    for (let j = 0; j < 4; j++) {
      if (!values[0]) {
        blankPosition = [i, j];
      }
      row.push(values.shift());
    }
    matrix.push(row);
  }

  return { matrix, blankPosition, history };

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
};

const canMove = (blankPosition, i, j) => {
  let [blankI, blankJ] = blankPosition;
  if (blankI === i && blankJ === j) {
    return false;
  }
  else if (blankI === i && (blankJ === j+1 || blankJ === j-1)) {
    return true;
  }
  else if ((blankI === i+1 || blankI === i-1) && blankJ === j) {
    return true;
  }
  return false;
};

export const changeCellPosition = (data, i, j, isBack) => {
  let matrix = data.matrix;
  let blankPosition = data.blankPosition;
  let history = data.history;

  // exit if can not apply
  if (!isBack && !canMove(data.blankPosition, i, j)) {
    return false;
  }
  if (!isBack) {
    history.push(blankPosition);
  }

  let value = matrix[i][j];
  matrix[i][j] = '';
  matrix[blankPosition[0]][blankPosition[1]] = value;
  blankPosition = [i, j];
  return({ matrix, blankPosition, history });
};

export const backState = (data) => {
  if (data.history.length) {
    let [i, j] = data.history.pop();
    return changeCellPosition(data, i, j, true);
  }
};
