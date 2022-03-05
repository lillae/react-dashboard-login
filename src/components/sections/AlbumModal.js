import React,{ useState} from 'react';
import {Modal} from 'react-bulma-components';
import { useDashboard } from '../../context/DashboardContext';

const AlbumModal = () => {
  const {isModal, setIsModal, card, albums} = useDashboard();

  return (
    <div className={`modal is-clipped ${isModal ? 'is-active': ''}`}>
      <div className='modal-background'></div>
      {card && 
          <div className='modal-content'>
            <h2>Album Details</h2>
            <div className='id-wrapper'>
              <h3><strong>Id:</strong> {card.id}</h3>
              <h3><strong>User Id:</strong> {card.userId}</h3>
            </div>
            <h3 className='album-title'>
              <strong>Title:</strong> {card.title}
            </h3>
      </div>
      }
    <button className='modal-close is-large' aria-label='close' onClick ={()=> setIsModal(false)}></button>
  </div>
  
  );
};

export default AlbumModal;
