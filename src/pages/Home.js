import { Card } from "../Components/Card"
import { ModalProfile } from "../Components/ModalProfile"
import { Navbar } from "../Components/Navbar"

import styles from './../styles/Pages/pageHome.module.css'

export const HomePage = () => {
  return (
    <>
      <ModalProfile />
      <div className={styles.container}>
        <header>
          <Navbar />
        </header>

        <main className={styles.content}>
          <section>
            <h1>Navers</h1>
            <button>Adicionar Naver</button>
          </section>

          <section className={styles.cards}>
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </main>

      </div>
    </>
  )
}