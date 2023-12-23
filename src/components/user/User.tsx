import React from 'react';
import { Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useAuth } from '../../context/AuthProvider/useAuth';

export function User() {
    const auth = useAuth();
    const name = 'Lorem Ipsum';
    const email = auth?.email;
    console.log(name, email);
    return (
        <div style={{
            padding: '0 20px 20px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
        }}
        >   
            <div>
                <Avatar size="large" icon={<UserOutlined />} />
            </div>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{ color: 'black', margin: 0, wordBreak: "break-all" }}><strong>{name}</strong></span>
                <span style={{ color: 'black', margin: 0, wordBreak: "break-all", fontSize: '12px' }}>{email}</span>
            </div>
        </div>
    );
}