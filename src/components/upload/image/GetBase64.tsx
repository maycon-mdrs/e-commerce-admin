import React, { useEffect, useState } from 'react';
import { Button, message, Modal, Upload } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

import './style.css';

interface GetBase64Props {
    onImageChange: (base64: string | null) => void;
    resetUpload: boolean;
    setResetUpload: (value: boolean) => void;
}

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        const base64 = reader.result as string;
        const base64Data = base64.split(',')[1];
        callback(base64Data);
    });
    reader.readAsDataURL(img);
};

const beforeUpload = (file: RcFile) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
        return Upload.LIST_IGNORE;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
        return Upload.LIST_IGNORE;
    }
    return true;
};

export function GetBase64({ onImageChange,  resetUpload, setResetUpload, product }: GetBase64Props & { product?: any }) {
    useEffect(() => {
        if (product.image) {
            const file: UploadFile = {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: `data:image/jpeg;base64,${product.image}`,
            };
            setFileList([file]);
        }
        if (resetUpload) {
            setFileList([]);
            setResetUpload(false); // Reseta o estado de controle no componente pai
        }
    }, [resetUpload, setResetUpload]);
    
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const handlePreview = async (file: UploadFile) => {
        if (!file.url && !file.preview) {
            getBase64(file.originFileObj as RcFile, (base64) => {
                file.preview = base64;
            });
        }
    };

    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
        if (newFileList.length > 0 && newFileList[0].originFileObj) {
            getBase64(newFileList[0].originFileObj as RcFile, (base64) => {
                onImageChange(base64);
            });
        } else {
            onImageChange(null);
        }
    };

    const handleRemove = () => {
        setFileList([]);
        onImageChange(null);
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const itemRender = (originNode: JSX.Element, file: UploadFile) => (
        <div style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: 8 }} onClick={() => handlePreview(file)}>
                {originNode}
            </div>
            <Button icon={<DeleteOutlined />} onClick={() => handleRemove()}>Excluir</Button>
        </div>
    );

    return (
        <>
            <Upload
                customRequest={async ({ file, onSuccess }) => {
                    if (onSuccess) {
                        onSuccess('ok');
                    }
                }}
                listType="picture-card"
                fileList={fileList}
                beforeUpload={beforeUpload}
                //onPreview={handlePreview}
                onChange={handleChange}
                onRemove={handleRemove}
                itemRender={itemRender}
            >
                {fileList.length >= 1 ? null : uploadButton}
            </Upload>
        </>
    );
}
