import React from 'react';
import { Navbar, Heading, Button} from 'react-bulma-components';
import { FaUserCircle } from 'react-icons/fa';
import { useDashboard } from '../../context/DashboardContext';


const Nav = () => {
  const {setProfileOpen, profile, setCanLogin} = useDashboard();
  
  return (
      <Navbar color='bgNav'>
        <Navbar.Brand>
          <Heading subtitle>Dashboard</Heading>
        </Navbar.Brand>
        <div className='user-wrapper'>
          <span>@{profile.username}</span>
          <Navbar.Item>
            <FaUserCircle className='profile' onClick={() => setProfileOpen(true)}/>
          </Navbar.Item>
          <Button size={1} className='btn' onClick={() => setCanLogin(false)}>Log out</Button>
        </div>
      </Navbar>
  );
};

export default Nav;
