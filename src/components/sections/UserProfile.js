import React from 'react';
import {
  Section,
  Container,
  Button,
  Form,
  Block,
} from 'react-bulma-components';
import { useDashboard } from '../../context/DashboardContext';
import { FaUserCircle } from 'react-icons/fa';

const UserProfile = () => {
  const { setProfileOpen, profile } = useDashboard();

  return (
    <Section>
      <div className='profile-wrapper'>
        <Container className='banner'>
          <FaUserCircle />
          <h4>{profile.name}</h4>
        </Container>
        <Container className='profile-form-wrapper'>
          <form className='profile'>
            <Block renderAs='fieldset' disabled>
              <Form.Field>
                <Form.Label>Full Name</Form.Label>
                <Form.Control>
                  <Form.Input placeholder={profile.name} />
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Label>Email</Form.Label>
                <Form.Control>
                  <Form.Input placeholder={profile.email} />
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Label>Phone</Form.Label>
                <Form.Control>
                  <Form.Input placeholder={profile.phone} />
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Label>Address</Form.Label>
                <Form.Control>
                  <Form.Input
                    placeholder={`${profile.address.street} ${profile.address.suite}, ${profile.address.city}, ${profile.address.zipcode} `}
                  />
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Label>Username</Form.Label>
                <Form.Control>
                  <Form.Input placeholder={profile.username} />
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Label>ID</Form.Label>
                <Form.Control>
                  <Form.Input placeholder={profile.id} />
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Label>Company</Form.Label>
                <Form.Control>
                  <Form.Input placeholder={profile.company.name} />
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Label>Website</Form.Label>
                <Form.Control>
                  <Form.Input placeholder={profile.website} />
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Label>Catch Phrase</Form.Label>
                <Form.Control>
                  <Form.Input placeholder={profile.company.catchPhrase} />
                </Form.Control>
              </Form.Field>
              <Form.Field>
                <Form.Label>BS</Form.Label>
                <Form.Control>
                  <Form.Input placeholder={profile.company.bs} />
                </Form.Control>
              </Form.Field>
            </Block>
            <Button
              size={1}
              onClick={() => setProfileOpen(false)}
              className='btn back'
            >
              Go Back
            </Button>
          </form>
        </Container>
      </div>
    </Section>
  );
};

export default UserProfile;
