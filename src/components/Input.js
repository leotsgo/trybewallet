import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, type, id, onChange, value } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        { ' ' }
        <input id={ id } type={ type } onChange={ onChange } value={ value } />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
  value: 0,
};

export default Input;
