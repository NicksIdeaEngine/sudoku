import React, { Component } from 'react';
import PropTypes from 'prop-types';
import standardSudokus from '../data/sudokuData';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDifficultyMenu: false,
    };
    this.toggleDifficultyMenu = this.toggleDifficultyMenu.bind(this);
  }

  toggleDifficultyMenu(event) {
    event.preventDefault();
    let { showDifficultyMenu } = this.state;
    showDifficultyMenu = !showDifficultyMenu;
    if (showDifficultyMenu) {
      this.setState({ showDifficultyMenu }, () => {
        document.addEventListener('click', this.toggleDifficultyMenu);
      });
    } else if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showDifficultyMenu }, () => {
        document.removeEventListener('click', this.toggleDifficultyMenu);
      });
    }
  }

  render() {
    const {
      resetGame,
      clearBoard,
      newGame,
      clearHighlight,
      setDifficulty,
      currentDifficulty,
      toggleInsertMode,
      insertMode,
    } = this.props;
    const { showDifficultyMenu } = this.state;
    const menuNumbers = [];
    const { difficultyOptions } = standardSudokus;
    const difficultyButtons = [];
    let numberButtonClass = ['menu-number-button'];
    let index;
    let text;

    for (let i = 1; i <= 9; i += 1) {
      index = i;
      numberButtonClass = ['menu-number-button'];
      if (index.toString() === insertMode)
        numberButtonClass.push('menu-number-button-active');
      menuNumbers.push(
        <button
          key={`menu-number-btn-${i - 1}`}
          id={`menu-number-btn-${i - 1}`}
          type="button"
          className={numberButtonClass.join(' ')}
          onClick={(e) => {
            toggleInsertMode(e.target.value);
          }}
          value={i}
        >
          {i}
        </button>,
      );
    }

    for (let i = 1; i <= 10; i += 1) {
      index = i - 1;
      text = difficultyOptions[index];
      difficultyButtons.push(
        <button
          key={`drowndown-btn-${index}`}
          id={`drowndown-btn-${index}`}
          type="button"
          className="menu-dropdown-button"
          value={index}
          onClick={(e) => setDifficulty(parseInt(e.target.value, 10))}
        >
          {text}
        </button>,
      );
    }

    return (
      <section className="menu">
        <div className="menu-container">
          <div className="menu-number">
            <div className="menu-number-settings">
              <button
                className="menu-number-button menu-number-remove-btn"
                type="button"
                id="menu-number-remove-btn"
                onClick={() => {
                  toggleInsertMode('remove');
                }}
              >
                remove
              </button>
              <button
                className="menu-number-button menu-number-switch-btn"
                type="button"
                id="menu-number-switch-btn"
                onClick={() => {
                  toggleInsertMode('switch');
                }}
              >
                switch
              </button>
            </div>
            <div className="menu-number-container">{menuNumbers}</div>
          </div>
          <button
            className="menu-button"
            type="button"
            onClick={clearHighlight}
          >
            clear highlight
          </button>
          <button className="menu-button" type="button" onClick={clearBoard}>
            clear board
          </button>
          <button className="menu-button" type="button" onClick={resetGame}>
            reset game
          </button>
          <button className="menu-button" type="button" onClick={newGame}>
            new game
          </button>
          <button
            className="menu-button"
            type="button"
            onClick={this.toggleDifficultyMenu}
          >
            difficulty:&nbsp;
            {currentDifficulty}
          </button>
          <div className="menu-dropdown">
            {showDifficultyMenu ? (
              <div
                className="menu-dropdown-container"
                ref={(e) => {
                  this.dropdownMenu = e;
                }}
              >
                {difficultyButtons}
              </div>
            ) : null}
          </div>
        </div>
      </section>
    );
  }
}

Menu.propTypes = {
  resetGame: PropTypes.func.isRequired,
  clearBoard: PropTypes.func.isRequired,
  newGame: PropTypes.func.isRequired,
  clearHighlight: PropTypes.func.isRequired,
  setDifficulty: PropTypes.func.isRequired,
  currentDifficulty: PropTypes.string.isRequired,
  toggleInsertMode: PropTypes.func.isRequired,
  insertMode: PropTypes.string.isRequired,
};

export default Menu;
