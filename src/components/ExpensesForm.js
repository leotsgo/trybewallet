import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import { addExpense } from '../actions';

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: [],
    };
  }

  handleChange({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  async handleClick() {
    const { addNewExpense } = this.props;
    const exchangeRates = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
    this.setState({ exchangeRates });
    addNewExpense(this.state);
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <Input
          label="Valor:"
          id="value"
          type="number"
          onChange={ this.handleChange }
          value={ value }
        />

        <Input
          label="Descrição:"
          id="description"
          type="text"
          onChange={ this.handleChange }
          value={ description }
        />

        <Select
          label="Moeda:"
          id="currency"
          options={ currencies }
          onChange={ this.handleChange }
          value={ currency }
        />

        <Select
          label="Método de pagamento:"
          id="method"
          options={ paymentMethods }
          onChange={ this.handleChange }
          value={ method }
        />

        <Select
          label="Tag:"
          id="tag"
          options={ tags }
          onChange={ this.handleChange }
          value={ tag }
        />
        <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  addNewExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    currencies: state.wallet.currencies,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    addNewExpense: (state) => dispatch(addExpense(state)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
