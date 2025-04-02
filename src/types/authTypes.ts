export interface LoginType {
    email:string;
    password: string;
}

export interface SignUpType {
    email: string;
    password: string;
    username: string;
    ageBracket: string;
}

export interface ForgotPasswordType {
    email: string
}

export interface ResetPasswordType {
    password: string;
    confirm_password: string;
}