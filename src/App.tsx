import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { PrivateRoutes } from './pages/privateRoutes';
import { CadastroPage } from './pages/cadastro/CadastroPage';
import { LoginPage } from './pages/login/LoginPage';
import { HomePage } from './pages/home/HomePage';
import { initializeAxios } from './services/api'; // Importe a função initializeAxios
import { ConfigPage } from './pages/configuracoes/ConfigPage';
import { Estoque } from './components/mainHome/estoque/Estoque';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Inicialize o Axios com uma função de callback para redirecionar
    initializeAxios(() => navigate('/login'));
  }, [navigate]);
  
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="*" element={<Navigate to="/home/estoque" />} />
        <Route path='/home' element={<HomePage />}>
          <Route index path='estoque' element={<Estoque />}></Route>
          <Route path='config' element={<ConfigPage />}></Route>
        </Route>
        <Route path='/config' element={<ConfigPage />}></Route>
      </Route>
      <Route path='/cadastro' element={<CadastroPage />}></Route>
      <Route path='/login' element={<LoginPage />}></Route>

      {/* <Route path='/carrinho' element={<CarrinhoPage />}></Route> */}
    </Routes>
  );
}

export default App;
