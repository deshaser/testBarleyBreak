import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMatrixAction, changeMatrixPositionAction, backMatrixAction } from '../../actions/matrixAction'
import './area.css';
import './button.css';


const mapStateToProps = state => ({
  matrix: state.matrixReducer.matrix
});

const mapDispatchToProps = dispatch => ({
  getMatrixAction: () => dispatch(getMatrixAction()),
  changeMatrixPositionAction: (data, i, j) => dispatch(changeMatrixPositionAction(data, i, j)),
  backMatrixAction: (data) => dispatch(backMatrixAction(data)),
});


class Area extends Component {

  componentDidMount() {
    if (!this.props.matrix) {
      this.props.getMatrixAction();
    }
  }

  render() {
    if (!this.props.matrix) {
      return false;
    }
    let matrix = this.props.matrix.matrix;

    return (
      <div className='game'>
        <button className="md-btn" onClick={ () => { this.handleBack() } }>Back</button>
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
        <button className="md-btn" onClick={ () => { this.handleReset() } }>RESET</button>
      </div>
    );
  }

  handleCellClick(i, j) {
    this.props.changeMatrixPositionAction(this.props.matrix, i, j);
  }

  handleReset() {
    this.props.getMatrixAction();
  }

  handleBack() {
    this.props.backMatrixAction(this.props.matrix);
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Area);
