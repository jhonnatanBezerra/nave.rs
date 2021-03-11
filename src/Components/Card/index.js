
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { HomeContext } from '../../contexts/homeContext';
import NewNaver from '../../pages/NewNaver';
import { Api } from '../../service/api';

import styles from '../../styles/Components/cards.module.css';


export const Card = ({ name, photo, job, idNaver }) => {


  const { setUser, setModalProfile, token, setModalDel, setUserEditing } = useContext(HomeContext);

  const router = useRouter();

  async function buscarUser(id) {
    const response = await Api.get(`/navers/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    setUser(response.data);
    setModalProfile(true);
  }

  const deletUser = async (id) => {
    const response = await Api.get(`/navers/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    setUser(response.data);
    setModalDel(true);
  }

  const searchToUpdate = async (id) => {
    const response = await Api.get(`/navers/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    setUser(response.data);
    setUserEditing(true);
    router.push('/NewNaver');
  }

  return (
    <>

      <div className={styles.cardContainer}>
        <button onClick={() => buscarUser(idNaver)}>
          <img src={photo} alt="user photo" />
        </button>
        <div>
          <h1>{name}</h1>
          <span>{job}</span>

          <div className={styles.iconsCard}>
            <button onClick={() => deletUser(idNaver)}>
              <img src="./Delete-Icon.png" alt="delet icon" />
            </button>

            <button onClick={() => searchToUpdate(idNaver)} >
              <img src="./Edit-Icon.png" alt="edit icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
