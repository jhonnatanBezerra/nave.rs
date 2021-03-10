import Head from 'next/head';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import moment from 'moment';

import { Navbar } from '../Components/Navbar';
import { Api } from '../service/api';
import { Modal, ModalInfo } from '../Components/Modal';

import styles from '../styles/Pages/newNaver.module.css';
import { HomeContext } from '../contexts/homeContext';


export default function NewNaver() {

  const { setModalEditNaver, modalEditNaver, modalNewNaver, setModalNewNaver, user, setUserEditing, token, userEditing } = useContext(HomeContext);


  const router = useRouter();

  const [name, setName] = useState(userEditing ? user.name : '');
  const [birthdate, setDate] = useState(userEditing ? moment(user.birthdate).format('YYYY/MM/DD') : '');
  const [project, setProject] = useState(userEditing ? user.project : '');
  const [job_role, setJobRole] = useState(userEditing ? user.job_role : '');
  const [admission_date, setAdmission] = useState(userEditing ? moment(user.admission_date).format('YYYY/MM/DD') : '');
  const [url, setURL] = useState(userEditing ? user.url : '');

  const backToHome = () => {
    setUserEditing(false);
    router.push('/Home');
  }

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

    try {
      const response = await Api.post('navers', data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setModalNewNaver(true);
      clear();

    } catch (err) {
      alert(err)
    }

  }

  const clear = () => {
    console.log(userEditing);
    console.log('limpando');
    setName('');
    setDate('');
    setProject('');
    setJobRole('');
    setAdmission('');
    setURL('');
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    const id = user.id;
    console.log('atualizei');


    const data = {
      name,
      birthdate,
      project,
      job_role,
      admission_date,
      url
    };

    try {
      const response = await Api.put(`/navers/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      setModalEditNaver(true);
    } catch (err) {
      alert(err)
    }

  }


  return (
    <>
      <Head>
        <title>Nave.rs</title>
      </Head>
      <div className={styles.newNaverContainer}>
        <Navbar />
        <div className={styles.newNaverContent}>
          <div className={styles.newNaverMain}>
            <h1>
              <img src="./Vector.png" alt="" onClick={() => backToHome()} />
              {userEditing ? 'Editar Naver' : 'Adicionar Naver'}

            </h1>

            <form onSubmit={userEditing ? handleUpdate : handleCreate} >

              <section className={styles.leftForm}>
                <label htmlFor="">Nome</label>
                <input type="text" placeholder={userEditing ? user.name : "Nome"} onChange={e => setName(e.target.value)} />

                <label htmlFor="">Idade</label>
                <input type="date" defaultValue={userEditing ? moment(user.birthdate).format('YYYY-MM-DD') : ''} onChange={e => setDate(moment(e.target.value).format('DD/MM/YYYY'))} />

                <label htmlFor="">Projetos que participou</label>
                <input type="text" placeholder={userEditing ? user.project : "Projetos que participou"} onChange={e => setProject(e.target.value)} />
              </section>

              <section className={styles.rightForm}>
                <label htmlFor="">Cargo</label>
                <input type="text" placeholder={userEditing ? user.job_role : "Cargo"} onChange={e => setJobRole(e.target.value)} />

                <label htmlFor="">Tempo de empresa</label>
                <input type="date" defaultValue={userEditing ? moment(user.admission_date).format('YYYY-MM-DD') : ''} onChange={e => setAdmission(moment(e.target.value).format('DD/MM/YYYY'))} />

                <label htmlFor="">URL da foto Naver</label>
                <input type="text" placeholder={userEditing ? user.url : "URL da foto Naver"} onChange={e => setURL(e.target.value)} />

                <div className={styles.buttonForm}>
                  <button type="submit">{userEditing ? 'Editar' : 'Salvar'}</button>
                </div>
              </section>
            </form>
          </div>
        </div>
        {modalNewNaver && <ModalInfo title="Naver criado" text='Naver criado com sucesso!' />}
        {modalEditNaver && <ModalInfo title="Naver atualizado" text='Naver atualizado com sucesso!' />}
      </div>

    </>
  )
}