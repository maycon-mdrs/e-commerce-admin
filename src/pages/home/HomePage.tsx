import { Nav } from 'react-bootstrap';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { useNavigate } from 'react-router-dom';

export function HomePage() {
    const auth = useAuth();
    const navigate = useNavigate();
    
    function handleLogout() {
        auth.logout();
        navigate('/login');
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={handleLogout}>SAIR</button>
        </div>
    );
}