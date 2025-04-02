import axiosInstance from "../axiosInstance";

export const AuthService = {
   login: (payload:any) => axiosInstance.post("/auth/login", payload),
   register: (payload:any) => axiosInstance.post("/auth/register", payload),
   forgotPassword: (payload:any) => axiosInstance.post("/auth/forgot-password", payload),
   resetPassword: (payload:any) => axiosInstance.post("/auth/reset-password", payload),
}