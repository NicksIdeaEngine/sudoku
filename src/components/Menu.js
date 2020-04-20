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
    } = this.props;
    const { showDifficultyMenu } = this.state;
    return (
      <section className="menu">
        <div className="menu-container">
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
};

export default Menu;
