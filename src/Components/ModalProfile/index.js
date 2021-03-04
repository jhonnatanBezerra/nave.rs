import styles from '../../styles/Components/modalProfile.module.css';

export const ModalProfile = () => {
  return (
    <div>
      <div className={styles.overlay}>
        <div className={styles.container}>
          <img src="https://github.com/jhonnatanBezerra.png" alt="perfil" />
          <section>

            <h1>Juliano Reis
            <img src="./close.svg" alt="fechar modal" onClick={null} />
            </h1>
            <p>Front-end Developer</p>

            <span>Idade</span>
            <p>Lorem ipsum</p>

            <span>Tempo de empresa</span>
            <p>Lorem ipsum</p>

            <span>Projetos que participou</span>
            <p>Lorem ipsum</p>



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