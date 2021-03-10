import { useRouter } from 'next/router'
import { Api } from '../service/api.js';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'

import styles from '../styles/Pages/login.module.css';

export const Login = () => {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {

    e.preventDefault();

    const data = {
      email,
      password
    };

    try {
      const response = await Api.post('users/login', data);
      Cookies.set('token', String(response.data.token));
      router.push("/Home");

    } catch (err) {
      alert('tente novamente');
    }

  }

  return (
    <div className={styles.container}>

      <div className={styles.content}>
        <header>
          <img src="/Path.png" alt="logo" />
          <h1>nave.rs</h1>
        </header>
        <main>

          <form onSubmit={handleLogin} className={styles.form}>

            <div className={styles.inputGroup}>
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
            </div>

            <div className={styles.inputGroup}>
              <label>Senha</label>
              <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
            </div>

            <button type="submit">Entrar</button>

          </form>
        </main>
      </div>
    </div>
  )
}