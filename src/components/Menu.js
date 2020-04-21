import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
    return (
      <section className="menu">
        <div className="menu-container">
          <div className="menu-number">
            <div className="dev-text">{insertMode}</div>
            <div className="menu-number-container">
              <button
                type="button"
                className="menu-number-button"
                onClick={(e) => {
                  toggleInsertMode(e.target.value);
                }}
                value="1"
              >
                1
              </button>
              <button
                type="button"
                className="menu-number-button"
                onClick={(e) => {
                  toggleInsertMode(e.target.value);
                }}
                value="2"
              >
                2
              </button>
              <button
                type="button"
                className="menu-number-button"
                onClick={(e) => {
                  toggleInsertMode(e.target.value);
                }}
                value="3"
              >
                3
              </button>
              <button
                type="button"
                className="menu-number-button"
                onClick={(e) => {
                  toggleInsertMode(e.target.value);
                }}
                value="4"
              >
                4
              </button>
              <button
                type="button"
                className="menu-number-button"
                onClick={(e) => {
                  toggleInsertMode(e.target.value);
                }}
                value="5"
              >
                5
              </button>
              <button
                type="button"
                className="menu-number-button"
                onClick={(e) => {
                  toggleInsertMode(e.target.value);
                }}
                value="6"
              >
                6
              </button>
              <button
                type="button"
                className="menu-number-button"
                onClick={(e) => {
                  toggleInsertMode(e.target.value);
                }}
                value="7"
              >
                7
              </button>
              <button
                type="button"
                className="menu-number-button"
                onClick={(e) => {
                  toggleInsertMode(e.target.value);
                }}
                value="8"
              >
                8
              </button>
              <button
                type="button"
                className="menu-number-button"
                onClick={(e) => {
                  toggleInsertMode(e.target.value);
                }}
                value="9"
              >
                9
              </button>
            </div>
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
                <button
                  type="button"
                  className="menu-dropdown-button"
                  value="0"
                  onClick={(e) => setDifficulty(parseInt(e.target.value, 10))}
                >
                  very easy
                </button>
                <button
                  type="button"
                  className="menu-dropdown-button"
                  value="1"
                  onClick={(e) => setDifficulty(parseInt(e.target.value, 10))}
                >
                  easy
                </button>
                <button
                  type="button"
                  className="menu-dropdown-button"
                  value="2"
                  onClick={(e) => setDifficulty(parseInt(e.target.value, 10))}
                >
                  moderate
                </button>
                <button
                  type="button"
                  className="menu-dropdown-button"
                  value="3"
                  onClick={(e) => setDifficulty(parseInt(e.target.value, 10))}
                >
                  challenging
                </button>
                <button
                  type="button"
                  className="menu-dropdown-button"
                  value="4"
                  onClick={(e) => setDifficulty(parseInt(e.target.value, 10))}
                >
                  tricky
                </button>
                <button
                  type="button"
                  className="menu-dropdown-button"
                  value="5"
                  onClick={(e) => setDifficulty(parseInt(e.target.value, 10))}
                >
                  hard
                </button>
                <button
                  type="button"
                  className="menu-dropdown-button"
                  value="6"
                  onClick={(e) => setDifficulty(parseInt(e.target.value, 10))}
                >
                  very hard
                </button>
                <button
                  type="button"
                  className="menu-dropdown-button"
                  value="7"
                  onClick={(e) => setDifficulty(parseInt(e.target.value, 10))}
                >
                  extreme
                </button>
                <button
                  type="button"
                  className="menu-dropdown-button"
                  value="8"
                  onClick={(e) => setDifficulty(parseInt(e.target.value, 10))}
                >
                  ultra extreme
                </button>
                <button
                  type="button"
                  className="menu-dropdown-button"
                  value="9"
                  onClick={(e) => setDifficulty(parseInt(e.target.value, 10))}
                >
                  random
                </button>
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
