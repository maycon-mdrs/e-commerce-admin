import { useNavigate } from 'react-router-dom';

export function useApiWithRedirection() {
    const navigate = useNavigate();

    const redirectToLogin = () => {
        navigate('/login');
    };

    return { redirectToLogin };
}
