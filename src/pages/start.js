import logo from '../imgs/logo512.png';
import '../styles/start.css';


function Start() {
  return (
    <div className="start">
      <header className="start-header">
        <img src={logo} className="start-logo" alt="logo" />
        <p>
          MUSIC
        </p>
        <div className='Play'>Começar</div>
      </header>
    </div>
  );
}



export default Start;
