import React from 'react';
import Input from './Input';
import Select from './Select';

class ExpensesForm extends React.Component {
  render() {
    const paymentMethods = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
    const tags = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
    return (
      <form>
        <Input label="Valor:" id="value" type="number" />

        <Input label="Descrição:" id="description" type="text" />

        <Select
          label="Moeda:"
          id="currency"
          options={ ['BRL'] }
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

export default ExpensesForm;
