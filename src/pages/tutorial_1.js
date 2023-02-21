import '../styles/tutorial.css';
import tt1 from '../imgs/tt1.png'
import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function Tutorial() {
  const navigate = useNavigate();//
  const handleOnClick = useCallback(() => navigate('/tutorial2', { replace: true }), [navigate]);//
  return (
    <header >
      <div className='Tutorial'>
        <div><img src={tt1} className='Phone' alt='Ilustration'></img></div>
        <div className='Caption'>Todas as suas anotações em um só lugar</div>
        <div className='Next' onClick={handleOnClick}>Próximo</div>
      </div>
      
      
    </header>


  );
}

export default Tutorial;