import Head from 'next/head';
import Cookies from 'js-cookie'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Navbar } from '../Components/Navbar';
import styles from '../styles/Pages/newNaver.module.css';

export default function NewNaver() {

  const router = useRouter();

  const token = Cookies.get('token');

  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [project, setProject] = useState('');
  const [job_role, setJobRole] = useState('');
  const [admission_date, setAdmission] = useState('');
  const [url, setURL] = useState('');

  return (
    <>
      <div className={styles.newNaverContainer}>
        <Navbar />
        <div className={styles.newNaverContent}>
          <div className={styles.newNaverMain}>
            <h1>
              <img src="./Vector.png" alt="" onClick={() => router.push('/Home')} />
              Adicionar Naver
            </h1>
            <form action="">

              <section className={styles.leftForm}>
                <label htmlFor="">Nome</label>
                <input type="text" placeholder="Nome" onChange={e => e.setName(e.target.value)} />

                <label htmlFor="">Idade</label>
                <input type="text" placeholder="Idade" onChange={e => e.setBirthdate(e.target.value)} />

                <label htmlFor="">Projetos que participou</label>
                <input type="text" placeholder="Projetos que participou" onChange={e => e.setProject(e.target.value)} />
              </section>

              <section className={styles.rightForm}>
                <label htmlFor="">Cargo</label>
                <input type="text" placeholder="Cargo" onChange={e => e.setJobRole(e.target.value)} />

                <label htmlFor="">Tempo de empresa</label>
                <input type="text" placeholder="Tempo de empresa" onChange={e => e.setAdmission(e.target.value)} />

                <label htmlFor="">URL da foto Naver</label>
                <input type="text" placeholder="URL da foto Naver" onChange={e => e.setURL(e.target.value)} />

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