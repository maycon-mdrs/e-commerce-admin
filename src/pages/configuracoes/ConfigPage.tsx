import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { Avatar, Button } from 'antd';
import { useAuth } from '../../context/AuthProvider/useAuth';
import { ConfigFormsConta } from './ConfigFormsConta';
import { ConfigFormsSenha } from './ConfigFormsSenha';

export function ConfigPage() {
    const auth = useAuth();
    return (
        <section style={{ minHeight: '100vh' }}>
            <div className="container" style={{ marginTop: 84 }}>
                <div className="row gutters">
                    <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="account-settings d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                                    <div className="user-profile">
                                        <div className="user-avatar">
                                            <Avatar style={{ backgroundColor: '#7265e6', verticalAlign: 'middle' }} size={100}>
                                                {auth.name?.toString().charAt(0).toUpperCase()}
                                            </Avatar>
                                        </div>
                                        <h5 className="user-name">{auth.name}</h5>
                                        <h6 className="user-email">{auth.email}</h6>
                                    </div>
                                    <div className="delete-profile">
                                        <Button type="primary" danger>Deletar conta</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="row gutters">
                                    {/* Coluna para o formulário de Conta */}
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <h6 className="mb-2 text-primary">Conta</h6>
                                        <ConfigFormsConta />
                                    </div>

                                    {/* Coluna para o formulário de Senha */}
                                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                        <h6 className="mb-2 text-primary">Senha</h6>
                                        <ConfigFormsSenha />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}