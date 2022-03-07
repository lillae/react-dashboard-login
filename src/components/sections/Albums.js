import React, { useEffect } from 'react';
import { useDashboard } from '../../context/DashboardContext';
import { Section, Container, Heading } from 'react-bulma-components';
import axios from 'axios';
import AlbumModal from './AlbumModal';
import AlbumsTable from './AlbumsTable';

const Albums = () => {
  const { setAlbums, card } = useDashboard();

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const res = await axios.get(
          'https://jsonplaceholder.typicode.com/albums'
        );
        if (res) {
          setAlbums(res.data);
        }
        return res;
      } catch (err) {
        console.log(err);
      }
    };
    fetchAlbums();
  }, []);

  return (
    <>
      <Section>
        <Container className='album-container'>
          <Heading>Albums</Heading>
          <Container>
            <AlbumsTable />
          </Container>
        </Container>
        {card && <AlbumModal />}
      </Section>
    </>
  );
};

export default Albums;
