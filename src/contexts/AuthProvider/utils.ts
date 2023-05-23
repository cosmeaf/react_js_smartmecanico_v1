import { Api } from "../../services/api";
import { IUser } from "./types";

// Set Local Storage
export function setUserLocalStorage(user: IUser | null) {
    localStorage.setItem("user", JSON.stringify(user))

}

// Get data LocalStorage
export function getUserLocalStorage() {
    const json = localStorage.getItem("user");
    if (!json) {
        return null
    }
    const user = JSON.parse(json)
    return user ?? null
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


// Login Request Function
export async function LoginRequest(username: string, password: string) {
    try {
        const request = await Api.post('/token/', { username, password })
        if (request.status === 200) {
            return request.data
        }
    } catch (error) {
        return error
    }
}


// Register Request Function
export async function RegisterRequest(username: string, email: string, password: string, confirmPassword: string) {
    try {
        const response = await Api.post('/register/', { username, email, password, password2: confirmPassword });
        if (response.status === 201) {
            return response.data;
        } else {
            return response.data;
        }
    } catch (error) {
        return error
    }
}

// Recovery Password Request Function
export async function RecoveryPasswordRequest(email: string) {
    try {
        const response = await Api.post('/recovery-password/', { email });
        if (response.status === 200) {
            return response.data;
        } else {
            return response.data;
        }
    } catch (error) {
        return error;
    }
}


// OTP code verify Request Function
export async function OtpCodeVerifyRequest(otp_code: string) {
    try {
        const response = await Api.post('/validate-otp/', { otp_code });
        if (response.status === 200) {
            return response.data;
        } else {
            return response.data;
        }
    } catch (error) {
        return error;
    }
}

export async function ResetPasswordRequest(uidb64: string, token: string, password: string, confirmPassword: string,) {
    console.log(uidb64, token, password, confirmPassword)
    try {
      const response = await Api.post(`/reset-password/${uidb64}/${token}/`, {password, password2: confirmPassword });
      console.log('API RESET PASSWORD ', response)
      if (response.status === 200) {
        return response.data;
    } else {
        return response.data;
    }
    } catch (error) {
      return error;
    }
  }


