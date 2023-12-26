import { getUserLocalStorage } from "../context/AuthProvider/util";
import { Api } from "./api";

export async function postProduct({ title, description, price, quantity }: {title:string, description:string, price:number, quantity:number}) {
    try {
        console.log({ title, description, price, quantity });
        const request = await Api.post("produtos/", 
        { title, description, price, quantity },
        { headers: { 'Authorization': `Token ${getUserLocalStorage()?.token}`}});
        return request.data;
    } catch (error) {
        throw error;
    }
}