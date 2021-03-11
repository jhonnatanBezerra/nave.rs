import { createContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie'

import { Api } from '../service/api';

export const HomeContext = createContext({});

export const HomeProvider = ({ children }) => {

  const [modalProfile, setModalProfile] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);
  const [modalDel, setModalDel] = useState(false);
  const [modalNewNaver, setModalNewNaver] = useState(false);
  const [modalEditNaver, setModalEditNaver] = useState(false);
  const [userEditing, setUserEditing] = useState(false);

  const [user, setUser] = useState([]);
  const token = Cookies.get('token');


  return (
    <HomeContext.Provider value={{
      setModalProfile, modalProfile,
      setModalInfo, modalInfo,
      setModalDel, modalDel,
      setModalNewNaver, modalNewNaver,
      user,
      setUserEditing, userEditing,
      setModalEditNaver, modalEditNaver,
      setUser, token
    }}>
      {children}

    </HomeContext.Provider>
  )
}