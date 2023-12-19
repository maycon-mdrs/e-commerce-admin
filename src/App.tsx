import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { PrivateRoutes } from './pages/privateRoutes';
import { CadastroPage } from './pages/cadastro/CadastroPage';
import { LoginPage } from './pages/login/LoginPage';
import { HomePage } from './pages/home/HomePage';
import { initializeAxios } from './services/api'; // Importe a função initializeAxios

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Inicialize o Axios com uma função de callback para redirecionar
    initializeAxios(() => navigate('/login'));
  }, [navigate]);
  
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
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
