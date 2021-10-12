import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, type, id } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        { ' ' }
        <input id={ id } type={ type } />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Input;
