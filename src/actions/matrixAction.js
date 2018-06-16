import { getMatrix, changeCellPosition, backState } from '../utils/matrixUtils'

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

export const backMatrixAction = (data) => dispatch => {
  let matrix = backState(data);
  if (matrix) {
    dispatch({
      type: 'BACK_MATRIX_ACTION',
      payload: matrix
    });
  }
};
