import React from 'react';
import PropTypes from 'prop-types';

class Select extends React.Component {
  render() {
    const { label, id, options, onChange, value } = this.props;
    return (
      <label htmlFor={ id }>
        { label }
        { ' ' }
        <select id={ id } onChange={ onChange } value={ value }>
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
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Select.defaultProps = {
  value: '',
};

export default Select;
