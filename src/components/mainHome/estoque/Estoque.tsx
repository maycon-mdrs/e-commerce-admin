import { Button, Flex, theme } from "antd";
import { Item } from "../../itens/Item";
import { useAuth } from "../../../context/AuthProvider/useAuth";
import { useEffect, useState } from "react";
import { getProducts } from "../../../services/getProducts";
import { CardsInfo } from "../cards/CardsInfo";

import {
    BarChartOutlined,
    ShopOutlined,
    InboxOutlined,
    PlusOutlined,
    ShoppingOutlined,
} from '@ant-design/icons';
import { Content } from "antd/es/layout/layout";
import { ModalItem } from "../modal/ModalItem";

export function Estoque() {
    const auth = useAuth();
    const [products, setProducts] = useState<any[]>([]); // Add useState hook to manage products
    const [totalValue, setTotalValue] = useState<number>(0);
    const [totalStock, setTotalStock] = useState(0);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showNewItemModal = () => {
        setIsModalVisible(true);
    };

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts(); // Await the promise to get the products
            setProducts(products); // Set the products in the state

            // Calculando o valor total
            const total = products.reduce((acc: number, product: { price: number; quantity: number; }) => acc + (product.price * product.quantity), 0);
            setTotalValue(total);

            // Calculando a quantidade total de estoque
            const totalStock = products.reduce((acc: number, product: { quantity: number; }) => acc + product.quantity, 0);
            setTotalStock(totalStock);
        };

        fetchProducts(); // Call the fetchProducts function
    }, []);

    return (
        <section style={{ minHeight: '100vh' }}>
            <div className="d-flex flex-column flex-lg-row" style={{ gap: 16, margin: '84px 16px 0 16px' }}>
                <CardsInfo
                    title="Despesa Total"
                    icon={<ShopOutlined style={{ fontSize: '40px', color: '#ff4d4f' }} />} // #EA580C
                    value={'0'}
                />
                <CardsInfo
                    title="Valor Total"
                    icon={<BarChartOutlined style={{ fontSize: '40px', color: '#58cc02' }} />}
                    value={'R$ ' + totalValue.toFixed(2).toString().replace('.', ',')}
                />
                <CardsInfo
                    title="Quant. de Produtos"
                    icon={<ShoppingOutlined style={{ fontSize: '40px', color: '#23303d' }} />}
                    value={products.length.toString()}
                />
                <CardsInfo
                    title="Quant. de Estoques"
                    icon={<InboxOutlined style={{ fontSize: '40px', color: '#23303d' }} />}
                    value={totalStock.toString()}
                />
            </div>
            <Content style={{
                margin: '16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
                overflow: 'initial',
            }}>

                <Flex wrap="wrap" gap="large" justify="center">
                    <Button 
                        type="primary" icon={<PlusOutlined />} 
                        shape="round" 
                        style={{ width: 'auto' }} 
                        danger
                        size="large"
                        onClick={showNewItemModal}
                    >
                        NOVO PRODUTO
                    </Button>

                    <ModalItem isVisible={isModalVisible} onShowModal={setIsModalVisible} />

                    {products ? products.map((product: any) => ( // Use map on the products array
                        <Item
                            key={product.id} // Add a unique key for each item
                            productId={product.id} // Pass the product id as a prop
                            product={product} // Pass the product as a prop
                        />
                    )) : <p>Loading...</p>}
                </Flex>

            </Content>
        </section>
    );
}