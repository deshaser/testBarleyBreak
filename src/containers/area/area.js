import React, { Component } from 'react';

import './area.css';


class Area extends Component {
  state = {
    matrix: this.getMatrix(),
    blankPosition: []
  };

  getMatrix() {
    let matrix = [];
    let values = (new Array(15)).fill(1).map((a, i) => i + 1);
    values.push('');
    values = shuffle(values);

    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 4; j++) {
        if (!values[0]) {
          setTimeout(() => {
            this.setState({ blankPosition: [i, j] });
          }, 0)
        }
        row.push(values.shift());
      }
      matrix.push(row);
    }

    return matrix;

    function shuffle(a) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }
  }

  changeCellPosition(i, j) {
    // exit if can not apply
    if (!this.canMove(i, j)) {
      return;
    }

    let matrix = this.state.matrix;
    let blankPosition = this.state.blankPosition;
    let value = matrix[i][j];
    matrix[i][j] = '';
    matrix[blankPosition[0]][blankPosition[1]] = value;
    blankPosition = [i, j];
    this.setState({ matrix, blankPosition });
  }

  canMove(i, j) {
    let [blankI, blankJ] = this.state.blankPosition;
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
  }

  render() {
    let matrix = this.state.matrix;

    return (
      <div className="area">

        { matrix.map((row, i) => (
          <div key={ i }>
            { row.map((cell, j) => (
              <div
                key={ j }
                className={ 'area__cell ' + (cell ? 'value' : '') }
                onClick={ () => { this.handleCellClick(i, j); } }>
                <span>
                  { cell || '.' }
                  {/*{ i + ',' + j }*/}
                </span>
              </div>
            )) }
          </div>
        )) }
      </div>
    );
  }

  handleCellClick(i, j) {
    this.changeCellPosition(i, j);
  }
}

export default Area;
