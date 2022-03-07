import React, { useState } from 'react';
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
  const {
    username,
    setUsername,
    password,
    setPassword,
    pwDefault,
    users,
    profile,
    setProfile,
    setCanLogin,
  } = useDashboard();

  const [alertPw, setAlertPw] = useState('');
  const [alertUsername, setAlertUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (profile.username === username && password === pwDefault) {
      setCanLogin(true);
    }

    if (profile.length === 0) {
      setAlertUsername('Incorrect Username');
    }
    if (profile.username === username && password !== pwDefault) {
      setAlertPw('Incorrect Password');
    }

    if (profile.length === 0 && password !== pwDefault) {
      setAlertUsername('Incorrect Username');
      setAlertPw('Incorrect Password');
    }

    if (username === '' || password === '') {
      alert('Fill out the Form');
      return;
    }
  };

  const handleClick = (id) => {
    const findProfile = users.find((x) => x.username === id);
    users.map((user) => {
      if (user.username === id) {
        setProfile(findProfile);
      }
      return profile;
    });
  };

  return (
    <Section className='is-centered login'>
      <Container className='login-wrapper'>
        <Heading className='has-text-centered mb-6 login-title'>
          Log in to your Dashboard
        </Heading>
        <Columns className='is-centered'>
          <form onSubmit={handleSubmit} id='form'>
            <Form.Field>
              <Form.Label htmlFor='username'>Username</Form.Label>
              <Form.Control>
                <Form.Input
                  placeholder='Username'
                  name='username'
                  value={username}
                  id='username'
                  data-testid='username'
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Icon align='left'>
                  <BiUserCircle className='icons' />
                </Icon>
              </Form.Control>
              {alertUsername && (
                <Form.Help color='danger' data-testid='error-user'>
                  {alertUsername}
                </Form.Help>
              )}
            </Form.Field>
            <Form.Field className='mb-5'>
              <Form.Label htmlFor='password'>Password</Form.Label>
              <Form.Control>
                <Form.Input
                  placeholder='Password'
                  name='password'
                  type='password'
                  id='password'
                  value={password}
                  data-testid='password'
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Icon align='left'>
                  <BiLock className='icons' />
                </Icon>
              </Form.Control>
              {alertPw && (
                <Form.Help color='danger' data-testid='error-pw'>
                  {alertPw}
                </Form.Help>
              )}
            </Form.Field>
            <Button.Group>
              <Button
                fullwidth
                rounded
                color='accent'
                onClick={() => handleClick(username)}
                className='login'
              >
                Log in
              </Button>
            </Button.Group>
          </form>
        </Columns>
      </Container>
    </Section>
  );
};

export default Login;
