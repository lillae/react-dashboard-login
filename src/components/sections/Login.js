import React, {useEffect} from 'react';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if(profile.username === username && password === pwDefault) {
      setCanLogin(true);
    } else if (profile.length === 0) {
      alert('Incorrect username')
    } else if (profile.username === username && password !== pwDefault) {
      alert('Incorrect password')
    } else {
      alert('Username and Password are incorrect');
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
        <Heading className='has-text-centered mb-6'>
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
