import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProfileState {
  isForgotPasswordModal: boolean;
  setIsForgotPasswordModal: (loading: boolean) => void;
}

const useStateStore = create<ProfileState>()(
  persist(
    (set) => ({
      isForgotPasswordModal: false,
      setIsForgotPasswordModal: (isForgotPasswordModal) => set({ isForgotPasswordModal }),

    
    }),
    {
      name: "util-states-storage", // Key for localStorage
    }
  )
);

export default useStateStore;
