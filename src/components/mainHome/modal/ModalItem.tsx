import React, { useEffect, useState } from 'react';
import { Modal, Upload, message, Button, Form } from 'antd';
import { LoadingOutlined, PlusOutlined, DeleteOutlined, ShoppingOutlined } from '@ant-design/icons';
import type { RcFile, UploadChangeParam, UploadFile, UploadProps } from 'antd/es/upload/interface';
import { GetBase64 } from '../../upload/image/GetBase64';
import { ModalItemForms } from './ModalItemForms';
import { deleteProduct, editProduct, postProduct } from '../../../services/postProduct';
import { IProduct } from '../../itens/types';

interface ModalItemProps {
    isVisible: boolean;
    onShowModal: (isVisible: boolean) => void;
}

export function ModalItem({ isVisible, onShowModal, product }: ModalItemProps & { product?: any }) {
    const [form] = Form.useForm();
    const [imageBase64, setImageBase64] = useState<string | null>();
    const [resetUpload, setResetUpload] = useState<boolean>(false);

    useEffect(() => {
        if (product) {
            form.setFieldsValue({
                title: product.title,
                description: product.description,
                price: product.price,
                quantity: product.quantity,
            });
            setImageBase64(product.image);
        }
    }, [product, form]);

    const handleImageChange = (base64: string | null) => {
        setImageBase64(base64);
    };

    const handleOk = async () => {
        try {
            const values = await form.validateFields();
            const productData = {
                ...values,
                image: imageBase64,
            };
            if (!product) {
                await postProduct(productData);
            } else {
                await editProduct(product.id, productData);
            }
            message.success('Produto salvo com sucesso!');
            form.resetFields();
            setImageBase64(null);
            setResetUpload(true); // Indica que o upload deve ser resetado
            onShowModal(false);
        } catch (error) {
            if (error && (error as any).errorFields) {
                // Erro de validação do formulário
                console.error('Validation error:', error);
            } else {
                // Erro na função postProduct ou outro erro
                console.error('Error in form submission:', error);
                message.error('Erro ao salvar o produto.');
            }
        }
    };

    const handleDelete = async () => {
        try {
            if (product) {
                await deleteProduct(product.id);
                message.success('Produto excluído com sucesso!');
                form.resetFields();
                setImageBase64(null);
                setResetUpload(true); // Indica que o upload deve ser resetado
                onShowModal(false);
            }
        } catch (error) {
            console.error('Error in form submission:', error);
            message.error('Erro ao excluir o produto.');
        };
    };

    const handleCancel = () => {
        form.resetFields(); // Reset form fields
        setImageBase64(null); // Reset image state
        setResetUpload(true); // Indica que o upload deve ser resetado
        onShowModal(false);
    };

    const title = (
        <span>
            <ShoppingOutlined style={{ fontSize: 20, color: '#ff4d4f' }} /> NOVO PRODUTO
        </span>
    );

    const footer = (
        <div style={{ textAlign: 'center' }}>
            <Button className='mt-3' key="submit" type="primary" onClick={handleOk} size='large' danger>
                Salvar
            </Button>
            {product && (
                <Button type="dashed" onClick={handleDelete} size='large' danger>
                    Excluir Produto
                </Button>
            )}
        </div>
    );

    return (
        <Modal
            title={title}
            open={isVisible}
            onCancel={handleCancel}
            footer={footer}
        >
            <Form
                form={form}
                name="register"
                scrollToFirstError
                layout="vertical"
            >
                <div className="row gutters mt-4">
                    <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                        <h6 className="mb-3 text-primary">Informações</h6>
                        <ModalItemForms />
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                        <h6 className="text-primary" style={{ marginBottom: 45 }}>Foto</h6>
                        <GetBase64 onImageChange={handleImageChange} resetUpload={resetUpload} setResetUpload={setResetUpload} product={product} />
                    </div>
                </div>
            </Form>
        </Modal>
    );
}
