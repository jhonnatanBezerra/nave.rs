import styles from '../styles/Pages/login.module.css';

export const Login = () => {
  return (
    <div className={styles.container}>

      <div className={styles.content}>
        <header>
          <img src="/Path.png" alt="logo" />
          <h1>nave.rs</h1>
        </header>
        <main>

          <form action="" className={styles.form}>

            <div className={styles.inputGroup}>
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" placeholder="E-mail" />
            </div>

            <div className={styles.inputGroup}>
              <label>Senha</label>
              <input type="password" placeholder="Senha" />
            </div>

            <button>Entrar</button>

          </form>
        </main>
      </div>
    </div>
  )
}