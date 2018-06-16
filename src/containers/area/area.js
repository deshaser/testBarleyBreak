import React, { Component } from 'react';

import './area.css';


class Area extends Component {
  getMatrix() {
    let matrix = [];
    let values = (new Array(15)).fill(1).map((a, i) => i + 1);
    values.push('');
    values = shuffle(values);

    for (let i = 0; i < 4; i++) {
      let row = [];
      for (let j = 0; j < 4; j++) {
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

  render() {
    let matrix = this.getMatrix();

    return (
      <div className="area">

        { matrix.map(row => (
          <div>
            { row.map(cell => (
              <div className='area__cell'>
                <span>
                  { cell || '.' }
                </span>
              </div>
            )) }
          </div>
        )) }
      </div>
    );
  }
}

export default Area;
