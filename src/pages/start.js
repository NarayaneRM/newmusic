import logo from '../imgs/logo512.png';
import '../styles/start.css';
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';


function Start() {
  const navigate = useNavigate();//
  const handleOnClick = useCallback(() => navigate('/tutorial1', { replace: true }), [navigate]);//
  return (

    <header className="start-header">
      <div className="start">
        <img src={logo} className="start-logo" alt="logo" />

        <p>MUSIC</p>
      </div>
      <div className='Play' onClick={handleOnClick}>Começar</div>
    </header>

  );
}



export default Start;
