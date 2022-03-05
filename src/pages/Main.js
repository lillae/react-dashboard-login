import React, {useEffect} from 'react'
import Home from './Home';
import Login from '../components/sections/Login';
import {useDashboard} from '../context/DashboardContext';

const Main = () => {
    const {canLogin} = useDashboard();

useEffect(() => {
}, [canLogin]);

  return (
    <>
       {canLogin ? <Home /> : <Login/>}
    </>
  )
}

export default Main