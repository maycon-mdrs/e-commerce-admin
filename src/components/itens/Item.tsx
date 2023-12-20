import { Card } from "antd";
import 'bootstrap/dist/css/bootstrap.css';
import { IProduct } from "./types";

export function Item({ productId, product}: { productId: string, product: IProduct }) {
    return (
        <Card style={{ width: '100%' }} key={productId} hoverable>
            <section style={{display: 'flex', width: 'auto', justifyContent: 'space-between'}}>
                <div className="d-flex flex-row align-items-center">
                    <img src={product.image} alt="" style={{width: 60, marginRight: '10px'}}/>
                    <section style={{textAlign: 'start'}}>
                        <h4>{product.title}</h4> {/* titulo */}
                        <h6>{product.description}</h6> {/* descrição */}
                    </section>
                </div>
                <div className="d-flex flex-row align-items-center" style={{gap: 20, textAlign: 'end'}}>
                    <section>
                        <p>Valor</p>
                        <h6>R${product.price?.toFixed(2)}</h6> {/* valor */}
                    </section>
                    <section>
                        <p>Estoque</p>
                        <h5>{product.quantity}</h5> {/* estoque */}
                    </section>
                </div>
            </section>
        </Card>

    );
}