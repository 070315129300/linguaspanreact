import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
    email: string; 
    name?: string; 
    token: string;  
    organization_portal_name: string;
}
  
  // Define the interface for the store state and actions
  interface AuthState {
    user: User | null; // The user can either be an object or null
    setUser: (user: User) => void; // Function to set the user
    clearUser: () => void; // Function to clear the user
    rememberMe: boolean;
    setRememberMe: (rememberMe: boolean) => void;
    resetPasswordEmail: string;
    setResetPasswordEmail: ( resetPasswordEmail: string ) => void;
    registerEmail: string;
    setRegisterEmail: ( resetPasswordEmail: string ) => void;
  }


const useAuthStore = create<AuthState>()(
  persist(
    set => ({
      user: null, // Initial state for the login object
      setUser: user => set({ user }), // Action to set the user
      clearUser: () => set({ user: null }), // Action to clear the user
      rememberMe: false,
      setRememberMe: rememberMe => set({ rememberMe }),
      resetPasswordEmail: "",
      setResetPasswordEmail: resetPasswordEmail => set({ resetPasswordEmail }),
      registerEmail: "",
      setRegisterEmail: registerEmail => set({ registerEmail })
    }),
    {
      name: 'auth-storage', // Key for localStorage
    }
  )
);

export default useAuthStore;
