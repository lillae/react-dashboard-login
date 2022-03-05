import React, { useContext, useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const DashboardContext = createContext();

export function useDashboard() {
  return useContext(DashboardContext);
}

export function DashboardProvider({ children }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [pwDefault, setPwDefault] = useState('1234');
  const [canLogin, setCanLogin] = useState(false);
  const [users, setUsers] = useState([]);
  const [profile, setProfile] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [userAlbums, setUserAlbums] = useState([]);
  const [profileOpen, setProfileOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [card, setCard] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        if(res) {
          setUsers(res.data);
        }
        return res;
      } catch(err) {
        console.log(err);
      }
    }
    fetchUsers();
  }, []);

  const value = {
    username,
    setUsername,
    password,
    setPassword,
    pwDefault,
    setPwDefault,
    canLogin, 
    setCanLogin,
    users,
    setUsers,
    profile,
    setProfile,
    albums,
    setAlbums,
    userAlbums,
    setUserAlbums,
    profileOpen,
    setProfileOpen,
    isModal,
    setIsModal,
    card,
    setCard,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}
