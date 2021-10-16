import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Input from './Input';
import Select from './Select';
import { saveEdition } from '../actions';

class ExpensesForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateState = this.updateState.bind(this);
    this.state = {
      id: 0,
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: [],
    };
  }

  componentDidMount() {
    this.updateState();
  }

  updateState() {
    const {
      expenseToEdit: {
        id, value, description, currency, method, tag, exchangeRates } } = this.props;
    this.setState({
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    });
  }

  handleChange({ target: { id, value } }) {
    this.setState({ [id]: value });
  }

  async handleClick() {
    const { saveExpense } = this.props;
    // const exchangeRates = await (await fetch('https://economia.awesomeapi.com.br/json/all')).json();
    // this.setState({ exchangeRates });
    // addNewExpense(this.state);
    saveExpense(this.state);
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
        <button type="button" onClick={ this.handleClick }>Editar despesa</button>
      </form>
    );
  }
}

ExpensesForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.any).isRequired,
  saveExpense: PropTypes.func.isRequired,
  expenseToEdit: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => (
  {
    currencies: state.wallet.currencies,
    expenseToEdit: state.wallet.expenseToEdit,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    saveExpense: (state) => dispatch(saveEdition(state)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);
