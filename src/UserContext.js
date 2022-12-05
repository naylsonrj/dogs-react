import React from 'react';
import { TOKEN_POST, USER_GET } from './api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function getUser(token) {
    const { url, options } = USER_GET(token); // USER_GET é uma função que retorna um objeto com url e options
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json); // seta o estado data com o json
    setLogin(true); // seta o estado login com true
    console.log(json)
  }

  async function userLogin(username, password){
    const {url, options} = TOKEN_POST({ username, password });
    const tokenRes = await fetch(url, options);
    const { token } = await tokenRes.json(); 
    window.localStorage.setItem('token', token); // Salva o token no localStorage
    getUser(token); // Busca os dados do usuário
  }

  return (
    <UserContext.Provider value={{ userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
