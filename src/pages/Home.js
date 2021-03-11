import { useRouter } from 'next/router';
import Head from 'next/head';
import { useContext, useEffect, useState } from 'react';

import { Navbar } from "../Components/Navbar";
import { Card } from '../Components/Card';
import { HomeContext } from "../contexts/homeContext";

import styles from './../styles/Pages/pageHome.module.css';
import { ModalProfile } from '../Components/ModalProfile';
import { Modal, ModalInfo } from '../Components/Modal';
import { Api } from '../service/api';
import { Authenticated } from '../service/auth';

export default function HomePage() {

  const router = useRouter();
  const [listCards, setListCards] = useState([]);

  const { modalProfile, modalDel, modalInfo, user, token } = useContext(HomeContext);

  const searchAllNavers = () => {
    Api.get('navers', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      setListCards(response.data);
    })
  }

  useEffect(() => {
    searchAllNavers();
  }, [user]);

  return (
    <>

      <Head>
        <title>Nave.rs | Home</title>
      </Head>
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

export const getServerSideProps = async (ctx) => {

  if (!Authenticated(ctx.req)) {
    ctx.res.writeHead(303, { Location: '/' });
    ctx.res.end();
  }

  return { props: {} };

}