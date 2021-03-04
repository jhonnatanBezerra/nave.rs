import styles from '../../styles/Components/modal.module.css';

export const Modal = ({ title, text, btn }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>

        <header>{title}</header>
        <p>{text}</p>

        {btn && (
          <div className={styles.options}>
            <button>Cancelar</button>
            <button>Excluir</button>
          </div>

        )}

        <button type="button">
          <img src="/close.svg" alt="fechar modal" />
        </button>
      </div>
    </div >
  )
}