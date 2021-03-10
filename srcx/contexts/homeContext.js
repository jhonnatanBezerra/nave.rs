import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie'

import { Api } from '../service/api';

export const HomeContext = createContext({});


export const HomeProvider = ({ children }) => {

  const [modalProfile, setModalProfile] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  const [modalDel, setModalDel] = useState(false);
  const [modalNewNaver, setModalNewNaver] = useState(false);
  const [userEditing, setUserEditing] = useState(false);

  const [user, setUser] = useState([]);
  const token = Cookies.get('token');

  const [listCards, setListCards] = useState([]);

  const searchAllNavers = () => {
    Api.get('navers', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(response => {
      setListCards(response.data);
    })
  }

  useEffect(() => {
    searchAllNavers();
  }, []);


  return (
    <HomeContext.Provider value={{
      setModalProfile, modalProfile,
      setModalInfo, modalInfo,
      setModalDel, modalDel,
      setModalNewNaver, modalNewNaver,
      searchAllNavers, user,
      setUserEditing, userEditing,
      listCards, setUser, token
    }}>
      {children}

    </HomeContext.Provider>
  )
}
