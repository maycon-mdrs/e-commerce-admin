import { Nav } from 'react-bootstrap';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';
import { Api } from '../../services/api';

export function HomePage() {
    const auth = useAuth();
    const navigate = useNavigate();
    
    function handleLogout() {
        auth.logout();
        navigate('/login');
    }

    async function handleTeste() {
        await Api.get('/produtos/', { headers: { Authorization: `Token ${auth.token}` } })
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogout}>SAIR</button>
            <button onClick={handleTeste}>teste</button>
        </div>
    );
}