import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, type, id, onChange } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        { ' ' }
        <input id={ id } type={ type } onChange={ onChange } />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
