import { Login } from './Login';
import { HomePage } from './Home';
import { NewNaver } from './NewNaver';
import { Modal } from '../Components/Modal';


export default function Home() {
  return (
    <>
      {/* <Login /> 
      <HomePage />
    */}
      <NewNaver />

      <Modal title="Naver Criado" text="Naver criado com sucesso!" />


    </>
  )
}
