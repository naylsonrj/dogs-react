import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../Hooks/useForm';
import Button from '../Forms/Button';
import Input from '../Forms/Input';

const LoginForm = () => {
  // const [username, setUsername] = React.useState('');
  // const [password, setPassword] = React.useState('');
  const username = useForm();
  const password = useForm();
  // console.log(password.validate());

  function handleSubmit(event) {
    event.preventDefault();
    if(username.validate() && password.validate() ) {
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
      });
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form actions="" onSubmit={handleSubmit}>
        <Input label="Usuario" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" />
        <Button disabled>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
