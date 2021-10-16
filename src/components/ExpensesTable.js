import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense, editExpense } from '../actions';

class ExpensesTable extends React.Component {
  render() {
    const { deleteExpense, updateExpense, expenses } = this.props;
    return (
      <table>
        <tbody>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
          { expenses.map((
            { id, value, description, currency, method, tag, exchangeRates },
          ) => (
            <tr key={ id }>
              <td>{ description }</td>
              <td>{ tag }</td>
              <td>{ method }</td>
              <td>{ value }</td>
              <td>{ exchangeRates[currency].name.split('/')[0] }</td>
              <td>{ (Number(exchangeRates[currency].ask)).toFixed(2) }</td>
              <td>{ (value * Number(exchangeRates[currency].ask)).toFixed(2) }</td>
              <td>Real</td>
              <td>
                <button
                  data-testid="edit-btn"
                  type="button"
                  onClick={ () => updateExpense(id) }
                >
                  Editar
                </button>
                <button
                  data-testid="delete-btn"
                  type="button"
                  onClick={ () => deleteExpense(id) }
                >
                  Remover
                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.any).isRequired,
  deleteExpense: PropTypes.func.isRequired,
  updateExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  {
    expenses: state.wallet.expenses,
    editing: state.wallet.editing,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    deleteExpense: (id) => dispatch(removeExpense(id)),
    updateExpense: (id) => dispatch(editExpense(id)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesTable);
