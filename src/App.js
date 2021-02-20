import React from 'react';
import './App.css';

import Home from './pages/Home';
import Error from './pages/Error';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';

function App() {
  return (
    <>
    <Home></Home>
    <Rooms></Rooms>
    <Error></Error>
    <SingleRoom></SingleRoom>
    </>
  );
}

export default App;
