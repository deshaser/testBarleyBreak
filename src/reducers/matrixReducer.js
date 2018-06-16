export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_MATRIX_ACTION':
      return {
        ...state,
        matrix: action.payload
      };
    case 'CHANGE_MATRIX_ACTION':
      return {
        ...state,
        matrix: action.payload
      };
    case 'BACK_MATRIX_ACTION':
      return {
        ...state,
        matrix: action.payload
      };
    default:
      return state
  }
}