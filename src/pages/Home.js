import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { Card } from "../Components/Card"

import { Navbar } from "../Components/Navbar"
import { Api } from "../service/api"

import styles from './../styles/Pages/pageHome.module.css'

export default function HomePage() {

  const token = Cookies.get('token');

  const router = useRouter();

  const [listCards, setListCards] = useState([]);

  useEffect(() => {
    Api.get('navers', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      setListCards(response.data);

    })
  }, []);

  return (
    <>

      <div className={styles.container}>
        <header>
          <Navbar />
        </header>

        <main className={styles.content}>
          <section>
            <h1>Navers</h1>
            <button onClick={() => router.push('/NewNaver')}>Adicionar Naver</button>
          </section>

          <section className={styles.cards}>
            {listCards.map(card => (
              <Card key={card.id} name={card.name} job={card.job_role} photo={card.url} />
            ))}
          </section>
        </main>

      </div>
    </>
  )
}