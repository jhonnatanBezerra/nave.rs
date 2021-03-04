import Head from 'next/head';
import { Navbar } from '../Components/Navbar';
import styles from '../styles/Pages/newNaver.module.css';

export const NewNaver = () => {
  return (
    <>
      <div className={styles.newNaverContainer}>
        <Navbar />
        <div className={styles.newNaverContent}>
          <div className={styles.newNaverMain}>
            <h1>
              <img src="./Vector.png" alt="" />
              Adicionar Naver
            </h1>
            <form action="">

              <section className={styles.leftForm}>
                <label htmlFor="">Nome</label>
                <input type="text" placeholder="Nome" />

                <label htmlFor="">Idade</label>
                <input type="text" placeholder="Idade" />

                <label htmlFor="">Projetos que participou</label>
                <input type="text" placeholder="Projetos que participou" />
              </section>

              <section className={styles.rightForm}>
                <label htmlFor="">Cargo</label>
                <input type="text" placeholder="Cargo" />

                <label htmlFor="">Tempo de empresa</label>
                <input type="text" placeholder="Tempo de empresa" />

                <label htmlFor="">URL da foto Naver</label>
                <input type="text" placeholder="URL da foto Naver" />
                <div className={styles.buttonForm}>
                  <button>Salvar</button>
                </div>
              </section>
            </form>

          </div>
        </div>
      </div>

    </>
  )
}