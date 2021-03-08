import Cookies from 'js-cookie'
import { useContext, useEffect, useState } from 'react';
import { HomeContext } from '../../contexts/homeContext';
import { Api } from '../../service/api';
import styles from '../../styles/Components/cards.module.css';
import { ModalProfile } from '../ModalProfile';


export const Card = ({ name, photo, job, idNaver }) => {


  const { setUser, modal, openModal } = useContext(HomeContext);

  const token = Cookies.get('token');

  async function buscarUser(id) {
    const response = await Api.get(`/navers/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    setUser(response.data);
    openModal();

  }

  return (
    <>
      {modal && < ModalProfile />}

      <div className={styles.cardContainer}>
        <button onClick={() => buscarUser(idNaver)}>
          <img src={photo} alt="user photo" />
        </button>
        <div>
          <h1>{name}</h1>
          <span>{job}</span>

          <div className={styles.iconsCard}>
            <button>
              <img src="./Delete-Icon.png" alt="delet icon" />
            </button>
            <button>
              <img src="./Edit-Icon.png" alt="delet icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}