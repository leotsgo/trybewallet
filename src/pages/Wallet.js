import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import ExpensesForm from '../components/ExpensesForm';
import { fetchCurrencies } from '../actions';
import Loading from '../components/Loading';

class Wallet extends React.Component {
  componentDidMount() {
    const { loadCurrencies } = this.props;
    loadCurrencies();
  }

  render() {
    const { loading } = this.props;
    if (loading) return <Loading />;
    return (
      <>
        <Header />
        <ExpensesForm />
      </>
    );
  }
}

Wallet.propTypes = {
  loading: PropTypes.bool.isRequired,
  loadCurrencies: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    loading: state.wallet.loading,
  });

const mapDispatchToProps = (dispatch) => (
  {
    loadCurrencies: () => dispatch(fetchCurrencies()),
  });

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
