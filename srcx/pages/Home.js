import { useRouter } from 'next/router';
import { useContext } from 'react';

import { Navbar } from "../Components/Navbar";
import { Card } from '../Components/Card';
import { HomeContext } from "../contexts/homeContext";

import styles from './../styles/Pages/pageHome.module.css';
import { ModalProfile } from '../Components/ModalProfile';
import { Modal, ModalInfo } from '../Components/Modal';

export default function HomePage() {

  const router = useRouter();

  const { listCards, modalProfile, modalDel, modalInfo } = useContext(HomeContext);

  return (
    <>
      <div className={styles.homeContainer}>
        <header>
          <Navbar />
        </header>
        <main className={styles.mainHome}>
          <div className={styles.middleHome}>
            <h1>Navers</h1>
            <button onClick={() => router.push('/NewNaver')}>Adicionar naver</button>
          </div>

          <section className={styles.sectionCard}>
            {listCards.map(card => (
              <Card key={card.id} name={card.name} job={card.job_role} photo={card.url} idNaver={card.id} />
            ))}
          </section>

          {modalProfile && < ModalProfile />}
          {modalDel && <Modal title="Excluir naver" text='Tem certeza que deseja excluir este Naver? ' />}
          {modalInfo && <ModalInfo title="Naver excluido" text='Naver excluído com sucesso!' />}

        </main>
      </div>
    </>
  )
}
