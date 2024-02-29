import { IProduct } from "../components/itens/types";
import { getUserLocalStorage } from "../context/AuthProvider/util";
import { Api } from "./api";

export async function postProduct({ title, description, price, quantity, image }: IProduct) {
    try {
        const request = await Api.post("produto/create/", 
        { title, description, price, quantity, image },
        { headers: { 'Authorization': `Token ${getUserLocalStorage()?.token}`}});
        return request.data;
    } catch (error) {
        throw error;
    }
}

export async function editProduct(id: number, {title, description, price, quantity, image }: IProduct ) {
    try {
        console.log(id, title, description, price, quantity, image)
        const request = await Api.patch(`produto/update/${id}/`,
        { title, description, price, quantity, image },
        { headers: { 'Authorization': `Token ${getUserLocalStorage()?.token}`}});
        return request.data;
    } catch (error) {
        throw error;
    }
}

export async function deleteProduct(id: number) {
    try {
        const request = await Api.delete(`produto/delete/${id}/`,
        { headers: { 'Authorization': `Token ${getUserLocalStorage()?.token}`}});
        return request.data;
    } catch (error) {
        throw error;
    }
}