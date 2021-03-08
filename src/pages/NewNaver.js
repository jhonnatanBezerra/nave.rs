import Head from 'next/head';
import Cookies from 'js-cookie'
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Navbar } from '../Components/Navbar';
import styles from '../styles/Pages/newNaver.module.css';
import { Api } from '../service/api';
import { Modal } from '../Components/Modal';

import moment from 'moment';

export default function NewNaver() {

  const router = useRouter();

  const token = Cookies.get('token');

  const [name, setName] = useState('');
  const [birthdate, setDate] = useState('');
  const [project, setProject] = useState('');
  const [job_role, setJobRole] = useState('');
  const [admission_date, setAdmission] = useState('');
  const [url, setURL] = useState('');


  const handleCreate = async (e) => {
    e.preventDefault();

    const data = {
      name,
      birthdate,
      project,
      job_role,
      admission_date,
      url
    };

    console.log(data.birthdate);

    try {
      const response = await Api.post('navers', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

    } catch (err) {

    }

  }


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
            <form onSubmit={handleCreate}>

              <section className={styles.leftForm}>
                <label htmlFor="">Nome</label>
                <input type="text" placeholder="Nome" onChange={e => setName(e.target.value)} />

                <label htmlFor="">Idade</label>
                <input type="date" placeholder="Idade" onChange={e => setDate(moment(e.target.value).format('DD/MM/YYYY'))} />

                <label htmlFor="">Projetos que participou</label>
                <input type="text" placeholder="Projetos que participou" onChange={e => setProject(e.target.value)} />
              </section>

              <section className={styles.rightForm}>
                <label htmlFor="">Cargo</label>
                <input type="text" placeholder="Cargo" onChange={e => setJobRole(e.target.value)} />

                <label htmlFor="">Tempo de empresa</label>
                <input type="date" placeholder="Tempo de empresa" onChange={e => setAdmission(moment(e.target.value).format('DD/MM/YYYY'))} />

                <label htmlFor="">URL da foto Naver</label>
                <input type="text" placeholder="URL da foto Naver" onChange={e => setURL(e.target.value)} />

                <div className={styles.buttonForm}>
                  <button type="submit">Salvar</button>
                </div>
              </section>
            </form>

          </div>
        </div>
      </div>

    </>
  )
}