import React from 'react';
import { useDashboard } from '../../context/DashboardContext';

const AlbumModal = () => {
  const { isModal, setIsModal, card } = useDashboard();

  return (
    <div className={`modal is-clipped ${isModal ? 'is-active' : ''}`}>
      <div className='modal-background'></div>
      {card && (
        <div className='modal-content'>
          <div className='id-wrapper'>
            <h3>
              <strong>ID:</strong> {card.id}
            </h3>
            <h3>
              <strong>User ID:</strong> {card.userId}
            </h3>
          </div>
          <h3 className='album-title'>
            <strong>Title</strong> <br /> {card.title}
          </h3>
        </div>
      )}
      <button
        className='modal-close is-large'
        aria-label='close'
        onClick={() => setIsModal(false)}
      ></button>
    </div>
  );
};

export default AlbumModal;
