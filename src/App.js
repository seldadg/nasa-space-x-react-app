import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';
import SpaceXhistoryEvents from './components/SpaceXhistoryEvents';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Route component={Home} path="/" exact />
      <Route component={NasaPhoto} path="/nasaphoto" />
      <Route component={SpaceXhistoryEvents} path="/spacex-history-events" />
    </div>
    </BrowserRouter>
  );
}


export default App;
