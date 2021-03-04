import styles from '../../styles/Components/cards.module.css';

export const Card = () => {
  return (
    <div className={styles.card}>

      <img src="https://github.com/jhonnatanBezerra.png" alt="profile photo" />
      <span>Jhonnatan Bezerra</span>
      <p>Front-end Developer</p>

      <div className={styles.icons}>
        <button className={styles.iconButton}>
          <img src="./Delete-Icon.png" alt="delet icon" />
        </button>
        <button className={styles.iconButton}>
          <img src="./Edit-Icon.png" alt="delet icon" />
        </button>
      </div>
    </div>
  )
}