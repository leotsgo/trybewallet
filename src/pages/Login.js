import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          Email:
          { ' ' }
          <input name="email" type="text" data-testid="email-input" />
        </label>

        <label htmlFor="password">
          Senha:
          { ' ' }
          <input name="password" type="number" data-testid="password-input" />
        </label>

        <button type="button">Entrar</button>
      </form>
    );
  }
}

export default Login;
