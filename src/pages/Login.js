import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { setUserValue } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { dispatchPayload } = this.props;
    const { email } = this.state;
    dispatchPayload(email);
    this.setState({ redirect: true });
  }

  render() {
    const { email, password, redirect } = this.state;
    const MIN_PASSWORD_LENGTH = 6;
    // https://stackoverflow.com/questions/742451/what-is-the-simplest-regular-expression-to-validate-emails-to-not-accept-them-bl
    const regexEmail = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const validEmail = regexEmail.test(email);

    if (redirect) return <Redirect to="/carteira" />;

    return (
      <fieldset>
        <label htmlFor="email">
          Email:
          { ' ' }
          <input
            name="email"
            type="email"
            data-testid="email-input"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>

        <label htmlFor="password">
          Senha:
          { ' ' }
          <input
            name="password"
            type="password"
            data-testid="password-input"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>

        <button
          type="button"
          disabled={ !(password.length >= MIN_PASSWORD_LENGTH && validEmail) }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </fieldset>
    );
  }
}

Login.propTypes = {
  dispatchPayload: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  {
    dispatchPayload: (payload) => dispatch(setUserValue(payload)),
  });

export default connect(null, mapDispatchToProps)(Login);
