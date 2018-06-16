import { getMatrix, changeCellPosition } from '../utils/matrixUtils'

export const getMatrixAction = () => dispatch => {
  dispatch({
    type: 'GET_MATRIX_ACTION',
    payload: getMatrix()
  });
};

export const changeMatrixPositionAction = (data, i, j) => dispatch => {
  let matrix = changeCellPosition(data, i, j);
  if (matrix) {
    dispatch({
      type: 'CHANGE_MATRIX_ACTION',
      payload: matrix
    });
  }
};
