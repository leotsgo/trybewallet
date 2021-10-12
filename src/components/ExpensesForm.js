import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';

class ExpensesForm extends React.Component {
  render() {
    const { currencies } = this.props;
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <Input label="Valor:" id="value" type="number" />

        <Input label="Descrição:" id="description" type="text" />

        <Select
          label="Moeda:"
          id="currency"
          options={ currencies }
        />

        <Select
          label="Método de pagamento:"
          id="payment"
          options={ paymentMethods }
        />

        <Select
          label="Tag:"
          id="tag"
          options={ tags }
        />
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies }
);

export default connect(mapStateToProps)(ExpensesForm);
