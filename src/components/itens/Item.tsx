import { Card } from "antd";
import Logo from '../../images/logo.png';
import 'bootstrap/dist/css/bootstrap.css';

export function Item({ key, product}: any) {
    return (
        <Card style={{ width: '100%' }}>
            <section style={{display: 'flex', width: 'auto', justifyContent: 'space-between'}}>
                <div className="d-flex flex-row align-items-center">
                    <img src={product.imagem} alt="" style={{width: 60, marginRight: '10px'}}/>
                    <section style={{textAlign: 'start'}}>
                        <h4>{product.titulo}</h4> {/* titulo */}
                        <h6>{product.descricao}</h6> {/* descrição */}
                    </section>
                </div>
                <div className="d-flex flex-row align-items-center" style={{gap: 20, textAlign: 'end'}}>
                    <section>
                        <p>Valor</p>
                        <h6>R${product.preco}</h6> {/* valor */}
                    </section>
                    <section>
                        <p>Estoque</p>
                        <h5>{product.quantidade}</h5> {/* estoque */}
                    </section>
                </div>
            </section>
        </Card>

    );
}