import { Card } from "antd";
import { IProduct } from "./types";
import Empty from "../../images/empty.svg";
import 'bootstrap/dist/css/bootstrap.css';
import '../style.css';

export function Item({ productId, product}: { productId: string, product: IProduct }) {
    return (
        <Card style={{ width: '100%' }} key={productId} hoverable>
            <section  className="d-flex flex-column flex-md-row justify-content-between" style={{ width: 'auto', gap: 10}}>
                <div className="d-flex flex-row align-items-center">
                    <img src={product.image ?? Empty} alt="" style={{width: 40, marginRight: '10px'}}/>
                    <section style={{textAlign: 'start'}}>
                        <h6 className="mb-0">{product.title}</h6> {/* titulo */}
                        <p className="mb-0">{product.description}</p> {/* descrição */}
                    </section>
                </div>
                <div className="d-flex flex-row align-items-center" style={{gap: 20, textAlign: 'end'}}>
                    <section>
                        <p className="mb-0">Valor</p>
                        <h6 className="mb-0">R$ {product.price?.toFixed(2).toString().replace('.', ',')}</h6> {/* valor */}
                    </section>
                    <section>
                        <p className="mb-0">Estoque</p>
                        <h6 className="mb-0" style={{color: '#58cc02'}}>{product.quantity}</h6> {/* estoque */}
                    </section>
                </div>
            </section>
        </Card>

    );
}