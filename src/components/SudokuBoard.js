/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile';

class SudokuBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  // addToValue(id) {
  //   this.setState((prevState) => {
  //     const { currentBoard } = prevState;
  //     const row = Math.floor(id / 9);
  //     const rowMod = id % 9;
  //     const rowContents = currentBoard[row].props.children;
  //     const tile = rowContents[rowMod];
  //     const { value } = tile;
  //     const oldValue = value ? parseInt(value, 10) : 0;
  //     let newValue = 0;

  //     if (oldValue !== 9) {
  //       newValue = oldValue + 1;
  //     }
  //     tile.value = newValue.toString();

  //     currentBoard[row].props.children[rowMod].value = tile.value;

  //     return { currentBoard };
  //   });
  // }

  render() {
    const { currentBoard, handleClick } = this.props;

    const fullBoard = currentBoard.map((rowOfTiles) => {
      const rowID = rowOfTiles.props.id;
      const rowClassName = rowOfTiles.props.className;
      const rowContents = rowOfTiles.props.children;
      const tileBatch = rowContents.map((tile) => {
        const {
          id,
          row,
          column,
          region,
          value,
          candidates,
          className,
          active,
          highlight,
        } = tile;

        return (
          <Tile
            key={id}
            id={id}
            row={row}
            column={column}
            region={region}
            value={value === '0' ? '' : value}
            candidates={candidates}
            className={className}
            active={active}
            highlight={highlight}
            handleClick={handleClick}
          />
        );
      });

      return (
        <div key={rowID} id={rowID} className={rowClassName}>
          {tileBatch}
        </div>
      );
    });

    return (
      <section className="sudoku">
        <div className="sudoku-container">{fullBoard}</div>
      </section>
    );
  }
}

SudokuBoard.propTypes = {
  currentBoard: PropTypes.arrayOf(PropTypes.node.isRequired).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default SudokuBoard;
