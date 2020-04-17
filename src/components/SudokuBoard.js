/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import React, { Component } from 'react';
import newStandardSudoku from '../lib/getNewSudoku';
import buildBoard from '../lib/buildBoard';
import Tile from './Tile';

class SudokuBoard extends Component {
  constructor() {
    super();

    const { startingSequence } = newStandardSudoku;

    this.state = {
      startingSequence,
      currentBoard: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleHighlight = this.handleHighlight.bind(this);
    this.addToValue = this.addToValue.bind(this);
  }

  componentDidMount() {
    const newBoard = buildBoard();
    let row;

    this.setState((prevState) => {
      const { startingSequence } = prevState;
      const splitSequence = startingSequence.split('');

      splitSequence.forEach((e, i) => {
        row = Math.floor(i / 9);
        newBoard[row].props.children[i % 9].value = e;
      });

      return {
        currentBoard: newBoard,
      };
    });
  }

  handleHighlight(id, tile) {
    this.setState((prevState) => {
      const { currentBoard } = prevState;

      console.log(tile);
      return { currentBoard };
    });
  }

  handleClick(id) {
    this.setState((prevState) => {
      const { currentBoard } = prevState;
      const row = Math.floor(id / 9);
      const rowMod = id % 9;
      const tile = currentBoard[row].props.children[rowMod];

      currentBoard.forEach((testRow) => {
        testRow.props.children.forEach((testTile) => {
          const newTile = testTile;
          const { className } = newTile;
          const splitClassName = className.split(' ');

          if (newTile.highlight === true) {
            newTile.highlight = false;
            console.log(splitClassName);
            splitClassName.splice(
              splitClassName.findIndex((e) => e === 'sudoku-tile-highlight'),
              1,
            );
            newTile.className = splitClassName.join(' ');
          }
          return newTile;
        });
        return testRow;
      });

      if (tile.highlight === false) {
        tile.highlight = true;
        const className = tile.className.split(' ');
        className.push('sudoku-tile-highlight');
        tile.className = className.join(' ');
      } else {
        tile.highlight = false;
        const className = tile.className.split(' ');
        className.splice(
          className.findIndex((e) => e === 'sudoku-tile-highlight'),
          1,
        );
        tile.className = className.join(' ');
      }

      currentBoard[row].props.children[rowMod] = tile;

      currentBoard.forEach((testRow) => {
        testRow.props.children.forEach((testTile) => {
          const newTile = testTile;
          if (testTile.row === tile.row && testTile.id !== tile.id) {
            if (testTile.highlight === false) {
              newTile.highlight = true;
              const className = testTile.className.split(' ');
              className.push('sudoku-tile-highlight');
              newTile.className = className.join(' ');
            }
          }
        });
      });

      currentBoard.forEach((testColumn) => {
        testColumn.props.children.forEach((testTile) => {
          const newTile = testTile;
          if (testTile.column === tile.column && testTile.id !== tile.id) {
            if (testTile.highlight === false) {
              newTile.highlight = true;
              const className = testTile.className.split(' ');
              className.push('sudoku-tile-highlight');
              newTile.className = className.join(' ');
            }
          }
        });
      });

      currentBoard.forEach((testRegion) => {
        testRegion.props.children.forEach((testTile) => {
          const newTile = testTile;
          if (testTile.region === tile.region && testTile.id !== tile.id) {
            if (testTile.highlight === false) {
              newTile.highlight = true;
              const className = testTile.className.split(' ');
              className.push('sudoku-tile-highlight');
              newTile.className = className.join(' ');
            }
          }
        });
      });

      return { currentBoard };
    });
  }

  addToValue(id) {
    this.setState((prevState) => {
      const { currentBoard } = prevState;
      const row = Math.floor(id / 9);
      const rowMod = id % 9;
      const rowContents = currentBoard[row].props.children;
      const tile = rowContents[rowMod];
      const { value } = tile;
      const oldValue = value ? parseInt(value, 10) : 0;
      let newValue = 0;

      if (oldValue !== 9) {
        newValue = oldValue + 1;
      }
      tile.value = newValue.toString();

      currentBoard[row].props.children[rowMod].value = tile.value;

      return { currentBoard };
    });
  }

  render() {
    const { currentBoard } = this.state;

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
          highlight,
        } = tile;

        return (
          <Tile
            key={`tile-${id}`}
            id={id}
            row={row}
            column={column}
            region={region}
            value={value === '0' ? '' : value}
            candidates={candidates}
            className={className}
            highlight={highlight.toString()}
            handleClick={this.handleClick}
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

export default SudokuBoard;
