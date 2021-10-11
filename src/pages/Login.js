import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, password } = this.state;
    const MIN_PASSWORD_LENGTH = 6;
    const regexEmail = /\S+@\S+\.\S+/;
    const validEmail = regexEmail.test(email);
    return (
      <form>
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
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
