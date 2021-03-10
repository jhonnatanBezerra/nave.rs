import { useContext, useState } from 'react';
import { HomeContext } from '../../contexts/homeContext';
import moment from 'moment';

import styles from '../../styles/Components/modalProfile.module.css';

export const ModalProfile = () => {

  const { user, setModalProfile, setModalDel } = useContext(HomeContext);


  const confirmDelete = () => {
    setModalProfile(false),
      setModalDel(true)
  }

  return (
    <div>
      <div className={styles.overlay} >

        <div className={styles.container}>
          <img src={user.url} alt="perfil" />
          <section>

            <h1>{user.name}
              <img src="./close.svg" alt="fechar modal" onClick={() => setModalProfile(false)} />
            </h1>
            <p>{user.job_role}</p>

            <span>Idade</span>
            <p>{moment().diff(user.birthdate, 'years')}</p>

            <span>Tempo de empresa</span>
            <p>Lorem ipsum</p>

            <span>Projetos que participou</span>
            <p>{user.project}</p>



            <div className={styles.buttonBox}>
              <button onClick={confirmDelete} >
                <img src="./Delete-Icon.png" alt="delet icon" />
              </button>
              <button >
                <img src="./Edit-Icon.png" alt="edit icon" />
              </button>

            </div>

          </section>

        </div>

      </div>
    </div>
  )
}

