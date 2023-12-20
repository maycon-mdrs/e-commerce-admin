import { Button, Flex, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import './style.css'
import { Item } from "../itens/Item";
import { getProducts } from "../../services/getProducts";
import { useEffect, useState } from "react";
import { BreadCrumb } from "../BreadCrumb";

export function MainHome() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [products, setProducts] = useState<any[]>([]); // Add useState hook to manage products

    useEffect(() => {
        const fetchProducts = async () => {
            const products = await getProducts(); // Await the promise to get the products
            setProducts(products); // Set the products in the state
        };

        fetchProducts(); // Call the fetchProducts function
    }, []);

    return (
        <>
            {/* Header */}
            <Header style={{
                padding: 0,
                background: colorBgContainer,
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                height: '150px'
            }}>
            </Header>

            <Content style={{ overflow: 'initial' }}>
                <div style={{ padding: 24, textAlign: 'center', background: colorBgContainer }}>

                    <Flex wrap="wrap" gap="large" justify="center">
                        {products ? products.map((product: any) => ( // Use map on the products array
                            <Item
                                key={product.id} // Add a unique key for each item
                                productId={product.id} // Pass the product id as a prop
                                product={product} // Pass the product as a prop
                            />
                        )) : <p>Loading...</p>}
                    </Flex>


                </div>
            </Content>
        </>
    );
}