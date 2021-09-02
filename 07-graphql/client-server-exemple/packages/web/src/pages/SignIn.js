import React from 'react';

export default function SignIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://127.0.0.1:8000/authenticate', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then((response) => response.json()).then((data) => console.log('success!', data))
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <label htmlFor="email">E-mail</label>
        {/* inputmode = no mobile aparece no teclado os caracteres de email nesse caso, como @ .com */}
        <input id="email" type="email" value={email} onChange={handleEmailChange} inputMode="email" autoComplete="username" />
      </fieldset>

      <fieldset>
        <label htmlFor="password">Senha</label>
        <input id="password" type="password" value={password} onChange={handlePasswordChange} autoComplete="current-password" />
      </fieldset>
      <button type="submit">Entrar</button>
    </form>
  )
}
