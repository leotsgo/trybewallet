import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { label, id, options } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        { ' ' }
        <select id={ id }>
          { options.map((opt) => <option key={ opt } value={ opt }>{ opt }</option>) }
        </select>
      </label>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Select;
