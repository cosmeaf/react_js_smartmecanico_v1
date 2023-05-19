import { Api } from "../../services/api";
import { IUser } from "./types";

// Set Local Storage
export function setUserLocalStorage(user: IUser | null){
    localStorage.setItem("user", JSON.stringify(user))

}

// Get data LocalStorage
export function getUserLocalStorage(){
    const json = localStorage.getItem("user");
    if(!json){
        return null
    }
    const user = JSON.parse(json)
    return user ?? null
}

// Login Request Function
export async function LoginRequest(username: string, password: string){
    try {
        const request = await Api.post('/token/', {username, password})
        console.log('AXIOS API REQUEST ', request)
        return request.data
    } catch (error) {
        return null
    }
}

// Verificar Token
export async function verifyToken(token: string) {
    try {
      const response = await Api.post('/verify/', { token });
      return response.status === 200;
    } catch (error) {
      return false;
    }
  }
  