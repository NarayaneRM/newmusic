import './styles/App.css';
import { NavLink } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <div>
        <NavLink to="/">
          Start
        </NavLink>
        <NavLink to="/tutorial1">
          Tutorial1
        </NavLink>
        <NavLink to="/tutorial2">
          Tutorial2
        </NavLink>
        <NavLink to="/tutorial3">
          Tutorial3
        </NavLink>
      </div>
      <Routes />
    </div>
  );
}

export default App;
