import '../styles/tutorial.css';
import tt1 from '../imgs/tt2.png'
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function Tutorial() {
  const navigate = useNavigate();//
  const handleOnClick = useCallback(() => navigate('/tutorial3', { replace: true }), [navigate]);//
  return (
    <header >
      <div className='Tutorial'>
        <img src={tt1} className='Phone' alt='Ilustration'></img>
        <div className='Caption'>Acesso a todas suas análises musicais em qualquer lugar</div>
      </div>
      <div className='Next' onClick={handleOnClick}>Próximo</div>
    </header>


  );
}

export default Tutorial;