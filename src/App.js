import { useState, createContext } from 'react';
import './App.css';
import UserFeed from './UserFeed';
import TrendingFeed from './TrendingFeed';

export const Context = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState('');
  return (
    <Context.Provider value={{currentUser, setCurrentUser}}>
      <div className="App">
        {!currentUser && <TrendingFeed />}
        {currentUser && <UserFeed />}
      </div>
    </Context.Provider>
  );
}

export default App;
