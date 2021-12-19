import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserFeed from './pages/UserFeed';
import TrendingFeed from './pages/TrendingFeed';
import * as ReactBootStrap from 'react-bootstrap';

export const Context = createContext();

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Context.Provider value={{ isLoading, setIsLoading }}>
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
