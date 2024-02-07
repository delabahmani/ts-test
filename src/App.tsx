import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';

function App() {
  return (
    <div className="App">
      <Greet name='Dela' messageCount={20} isLoggedIn={false}/>
      <Person />
    </div>
  );
}

export default App;
