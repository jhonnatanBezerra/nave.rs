import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie'

import { Api } from '../service/api';
import { Card } from '../Components/Card';

export const HomeContext = createContext({});


export const HomeProvider = ({ children }) => {

  const [modal, setModal] = useState(false);
  const [user, setUser] = useState([]);

  const token = Cookies.get('token');

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

  function closeModal() {
    setModal(false);
  }

  function openModal() {
    setModal(true);
  }

  return (
    <HomeContext.Provider value={{ listCards, modal, openModal, closeModal, setUser, user }}>
      {children}
      {listCards.map(card => (
        <Card key={card.id} name={card.name} job={card.job_role} photo={card.url} idNaver={card.id} />
      ))}

    </HomeContext.Provider>
  )
}