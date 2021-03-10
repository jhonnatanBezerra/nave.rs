import { useContext } from 'react';
import { HomeContext } from '../../contexts/homeContext';
import { Api } from '../../service/api';
import styles from '../../styles/Components/modal.module.css';


export const Modal = ({ title, text }) => {

  const { setModalDel, user, setUser, token, setModalInfo, searchAllNavers } = useContext(HomeContext);

  const deletUser = async (id) => {
    const response = await Api.delete(`/navers/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    setModalInfo(true);
    closeAndClear();
    searchAllNavers();
  }

  const closeAndClear = () => {
    setUser(null);
    setModalDel(false);
  }

  return (
    <div className={styles.modalInfoOverlay}>
      <div className={styles.modalInfoContainer}>

        <header>{title}</header>
        <p>{text}</p>

        {setModalDel && (
          < div className={styles.optionsModalInfo}>
            <button onClick={closeAndClear}>Cancelar</button>
            <button onClick={() => deletUser(user.id)}>Excluir</button>
          </div>
        )}

        <button type="button" onClick={closeAndClear}>
          <img src="/close.svg" alt="fechar modal" />
        </button>
      </div>
    </div >
  )
}

export const ModalInfo = ({ title, text }) => {

  const { setModalInfo, setModalNewNaver } = useContext(HomeContext);

  const close = () => {
    setModalNewNaver(false);
    setModalInfo(false);
  }

  return (
    <div className={styles.modalInfoOverlay}>
      <div className={styles.modalInfoContainer}>

        <header>{title}</header>
        <p>{text}</p>

        <button type="button" onClick={close}>
          <img src="/close.svg" alt="fechar modal" />
        </button>
      </div>
    </div >
  )
}
