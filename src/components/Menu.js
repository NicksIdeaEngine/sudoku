import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { clearHighlight } = this.props;
    return (
      <section className="menu">
        <div className="menu-container">
          <button type="button">reset</button>
          <button type="button" onClick={clearHighlight}>
            clear highlight
          </button>
        </div>
      </section>
    );
  }
}

Menu.propTypes = {
  clearHighlight: PropTypes.func.isRequired,
};

export default Menu;
