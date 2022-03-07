import React from 'react';
import { Table } from 'react-bulma-components';
import { useDashboard } from '../../context/DashboardContext';

const AlbumsTable = () => {
  const { profile, albums, setIsModal, setCard } = useDashboard();

  const handleOpen = (id) => {
    setCard(albums.find((x) => x.id === id));
    setIsModal(true);
  };

  return (
    <Table hoverable='true' bordered='true' size='fullwidth' className='table'>
      <thead>
        <tr>
          <th>
            <abbr title='Position'>ID</abbr>
          </th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {!!albums.length &&
          albums
            .filter((x) => x.userId === profile.id)
            .map((album) => (
              <tr onClick={() => handleOpen(album.id)} key={album.id}>
                <th>{album.id}</th>
                <td>{album.title}</td>
              </tr>
            ))}
      </tbody>
    </Table>
  );
};

export default AlbumsTable;
