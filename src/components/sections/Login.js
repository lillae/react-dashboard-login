import React, {useEffect, useState} from 'react';
import {
  Form,
  Icon,
  Button,
  Section,
  Container,
  Columns,
  Heading,
} from 'react-bulma-components';
import { useDashboard } from '../../context/DashboardContext';
import { BiUserCircle, BiLock } from 'react-icons/bi';

const Login = () => {
  const { setUsername, username, setPassword, password, pwDefault, users, profile, setProfile, setCanLogin, canLogin, setUserAlbums, userAlbums, albums} = useDashboard();
  const [alertPw, setAlertPw] = useState('');
  const [alertUsername, setAlertUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(profile.username === username && password === pwDefault) {
      setCanLogin(true);
    }

    if (profile.length === 0) {
      setAlertUsername('Incorrect Username');
    }
    if (profile.username === username && password !== pwDefault) {
      setAlertPw('Incorrect Password');
    } 

    if(profile.length === 0 && password !== pwDefault) {
      setAlertUsername('Incorrect Username');
      setAlertPw('Incorrect Password');
      
    }
  }

  const handleClick = (id) => {
    const findProfile = users.find(x => x.username === id);
    users.map(user => {
      if(user.username === id) {
        setProfile(findProfile);
      }
    })
   
  }
 
  
  return (
    <Section className='is-centered login'>
      <Container className='login-wrapper'>
        <Heading className='has-text-centered mb-6 login-title'>
          Login to your Dashboard
        </Heading>
        <Columns className='is-centered'>
          <form onSubmit={handleSubmit}>
            <Form.Field>
              <Form.Label>Name</Form.Label>
              <Form.Control>
                <Form.Input
                  placeholder='Username'
                  name='name'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Icon align='left'>
                  <BiUserCircle className='icons' />
                </Icon>
              </Form.Control>
              <Form.Help color="danger">{alertUsername}</Form.Help>
            </Form.Field>
            <Form.Field className='mb-5'>
              <Form.Label>Password</Form.Label>
              <Form.Control>
                <Form.Input
                  placeholder='Password'
                  name='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Icon align='left'>
                  <BiLock className='icons' />
                </Icon>
              </Form.Control>
              <Form.Help color="danger">{alertPw}</Form.Help>
            </Form.Field>
            <Button.Group>
              <Button fullwidth rounded color='accent' onClick={() => handleClick(username)} className='login'>
                Login
              </Button>
            </Button.Group>
          </form>
        </Columns>
      </Container>
    </Section>
  );
};

export default Login;
