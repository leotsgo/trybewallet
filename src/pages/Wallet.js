import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import ExpensesTable from '../components/ExpensesTable';
import EditForm from '../components/EditForm';
import { fetchCurrencies } from '../actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { loadCurrencies } = this.props;
    loadCurrencies();
  }

  render() {
    const { loading, expenses, editing } = this.props;
    return (
      <>
        <Header />
        { !loading && !editing && <ExpensesForm /> }
        { !loading && editing && <EditForm /> }
        <main>
          { expenses.length > 0 && <ExpensesTable /> }
        </main>
      </>
    );
  }
}

Wallet.propTypes = {
  loading: PropTypes.bool,
  loadCurrencies: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  editing: PropTypes.bool,
};

Wallet.defaultProps = {
  loading: false,
  editing: false,
};

const mapStateToProps = (state) => (
  {
    loading: state.wallet.loading,
    expenses: state.wallet.expenses,
    editing: state.wallet.editing,
  });

const mapDispatchToProps = (dispatch) => (
  {
    loadCurrencies: () => dispatch(fetchCurrencies()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
