import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { user: { email }, expenses } = this.props;
    return (
      <header>
        <p data-testid="email-field">{ email }</p>
        <p data-testid="total-field">
          { expenses.reduce((acc, crr) => {
            const usdValue = Math.round(Number(crr.value)
              * Number(crr.exchangeRates[crr.currency].ask) * 100) / 100;

            acc += usdValue;
            return acc;
          }, 0)}
        </p>
        <p data-testid="header-currency-field">BRL</p>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => (
  {
    user: state.user,
    expenses: state.wallet.expenses,
  }
);

export default connect(mapStateToProps)(Header);
