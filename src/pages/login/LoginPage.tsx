import 'bootstrap/dist/css/bootstrap.css';
import '../style.css';
import { Login } from '../../components/login/Login';

export function LoginPage () {
    return (
        <div className='container-fluid' id='login-page'>
            <div className="d-flex align-items-center justify-content-center col-lg-6" style={{ minHeight: '100vh' }}>
                <Login />
            </div>
        </div>
    );
}
