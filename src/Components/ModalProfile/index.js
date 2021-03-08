import { useContext } from 'react';
import { HomeContext } from '../../contexts/homeContext';
import moment from 'moment';

import styles from '../../styles/Components/modalProfile.module.css';

export const ModalProfile = () => {

  const { user, closeModal } = useContext(HomeContext);
  const years = moment().diff(user.birthdate, 'years');

  console.log();

  return (
    <div>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <img src={user.url} alt="perfil" />
          <section>

            <h1>{user.name}
              <img src="./close.svg" alt="fechar modal" onClick={closeModal} />
            </h1>
            <p>{user.job_role}</p>

            <span>Idade</span>
            <p>{years}</p>

            <span>Tempo de empresa</span>
            <p>Lorem ipsum</p>

            <span>Projetos que participou</span>
            <p>{user.project}</p>



            <div className={styles.buttonBox}>
              <span>btn</span>
              <span>btn</span>

            </div>


          </section>



        </div>

      </div>
    </div>
  )
}