
import styles from '../../styles/Components/cards.module.css';


export const Card = ({ name, job, photo }) => {

  function openModal() {

  }

  return (
    <div className={styles.card} onClick={openModal}>
      <img src={photo} alt="profile photo" />
      <span>{name}</span>
      <p>{job}</p>

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