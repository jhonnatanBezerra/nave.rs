import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

import { Navbar } from "../Components/Navbar"

import styles from './../styles/Pages/pageHome.module.css'
import { HomeProvider } from "../contexts/homeContext"

export default function HomePage() {

  const token = Cookies.get('token');

  const router = useRouter();


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
            <HomeProvider>

            </HomeProvider>
          </section>



        </main>
      </div>
    </>
  )
}