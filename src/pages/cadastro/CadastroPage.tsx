import 'bootstrap/dist/css/bootstrap.css';
import '../style.css';
import { Cadastro } from '../../components/cadastro/Cadastro';

export function CadastroPage () {

    return (
        <div className='container-fluid' id='cadastro-page'>
            <div className="d-flex align-items-center justify-content-center col-lg-6" style={{ minHeight: '100vh' }}>
                <Cadastro />
            </div>
        </div>
    );
}
