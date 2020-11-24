// /* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'

const MenuButton = ({ text }) => {
  return <button type="button">{text}</button>
}

MenuButton.propTypes = {
  text: PropTypes.string.isRequired,
}

export default MenuButton
