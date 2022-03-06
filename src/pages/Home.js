import React from 'react'
import Albums from '../components/sections/Albums';
import Nav from '../components/elements/Nav';
import UserProfile from '../components/sections/UserProfile';
import {useDashboard} from '../context/DashboardContext';
const Home = () => {
const {profileOpen} = useDashboard();

  return (
    <>
    {!profileOpen ? 
    <>
      <Nav/>
      <Albums/>
    </>
      :
      <UserProfile/>
    }
    </>
  
  )
}

export default Home