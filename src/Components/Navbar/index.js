import Cookies from 'js-cookie'
import { useRouter } from 'next/router';
import styles from '../../styles/Components/navbar.module.css'

export const Navbar = () => {
  const router = useRouter();

  const exit = () => {
    Cookies.remove('token');
    router.push("/");
  }

  return (
    <>
      <header className={styles.header}>
        <p>
          <img src="./Path.png" alt="logo" />
          nave.rs </p>
        <button onClick={() => exit()}>Sair</button>
      </header>
    </>
  )
}