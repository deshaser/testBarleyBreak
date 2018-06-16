import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMatrixAction, changeMatrixPositionAction } from '../../actions/matrixAction'
import './area.css';


const mapStateToProps = state => ({
  matrix: state.matrixReducer.matrix
});

const mapDispatchToProps = dispatch => ({
  getMatrixAction: () => dispatch(getMatrixAction()),
  changeMatrixPositionAction: (data, i, j) => dispatch(changeMatrixPositionAction(data, i, j)),
});


class Area extends Component {

  componentDidMount() {
    this.props.getMatrixAction();
  }

  render() {
    if (!this.props.matrix) {
      return false;
    }
    let matrix = this.props.matrix.matrix;

    return (
      <div className="area">
        { matrix.map((row, i) => (
          <div key={ i } className='area__row'>
            { row.map((cell, j) => (
              <div
                key={ j }
                className={ 'area__cell ' + (cell ? 'has-value' : '') }
                onClick={ () => { this.handleCellClick(i, j); } }
              >
                <div>
                  { cell }
                </div>
              </div>
            )) }
          </div>
        )) }
      </div>
    );
  }

  handleCellClick(i, j) {
    this.props.changeMatrixPositionAction(this.props.matrix, i, j);
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Area);
