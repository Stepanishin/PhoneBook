import React from 'react';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { MainRoutes } from './router/index';
import './App.css'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App" >
      <Header />
      <Routes>
        {
          MainRoutes.map(route => 
            <Route 
              path={route.path}
              key={route.path}
              element={<route.component />}
            />
          )
        }
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
