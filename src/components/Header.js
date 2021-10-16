import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user: { email }, total = 0 } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">
          { total }
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  total: PropTypes.number,
};

Header.defaultProps = {
  total: 0,
};

const mapStateToProps = (state) => (
  {
    user: state.user,
    total: state.wallet.total,
  }
);

export default connect(mapStateToProps)(Header);
