import styles from '../../styles/Components/navbar.module.css'

export const Navbar = () => {
  return (
    <>
      <header className={styles.header}>
        <p>
          <img src="./Path.png" alt="logo" />
          nave.rs </p>
        <a href="#">Sair</a>
      </header>
    </>
  )
}