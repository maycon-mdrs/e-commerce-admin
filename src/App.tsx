import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './pages/privateRoutes';
import { CadastroPage } from './pages/cadastro/CadastroPage';
import { LoginPage } from './pages/login/LoginPage';
import { HomePage } from './pages/home/HomePage';

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes/>}>
        <Route path="*" element={<Navigate to="/home" />} />
          <Route path='/home' element={<HomePage />}></Route>
      </Route>
      <Route path='/cadastro' element={<CadastroPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>

      {/* <Route path='/carrinho' element={<CarrinhoPage />}></Route> */}
    </Routes>
  );
}

export default App;
