import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserFeed from './UserFeed';
import TrendingFeed from './TrendingFeed';
import * as ReactBootStrap from 'react-bootstrap';

export const Context = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Context.Provider value={{ currentUser, setCurrentUser, setIsLoading }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<TrendingFeed />} />
          <Route path="/:currentUser" element={<UserFeed />} />
        </Routes>
        {isLoading && (
          <ReactBootStrap.Spinner
            animation="border"
            style={{ position: 'fixed', top: '50%', left: '50%' }}
          />
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
