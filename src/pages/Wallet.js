import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { loadCurrencies } = this.props;
    loadCurrencies();
  }

  render() {
    const { loading, expenses } = this.props;
    return (
      <>
        <Header />
        { !loading && <ExpensesForm /> }
        { expenses.length > 0 && <ExpensesTable /> }
      </>
    );
  }
}

Wallet.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => (
  {
    loading: state.wallet.loading,
    expenses: state.wallet.expenses,
  });

const mapDispatchToProps = (dispatch) => (
  {
    loadCurrencies: () => dispatch(fetchCurrencies()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
