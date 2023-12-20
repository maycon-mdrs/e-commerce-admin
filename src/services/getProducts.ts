import { getUserLocalStorage } from "../context/AuthProvider/util";
import { Api } from "./api";

export async function getProducts() {
    try {
        const request = await Api.get("produtos/", { headers: { 'Authorization': `Token ${getUserLocalStorage()?.token}`}});
        //console.log('request.data: ', request.status);
        return request.data;
    } catch (error) {
        //console.error(error);
        return null;
    }
}