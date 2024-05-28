import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface AuthState {
    status: 'checking' | 'authenticated' | 'not-authenticated';
    userId: string | null;
    userName: string | null;
    token: string | null;
    errorMessage: string | null;
    checkingCredentials: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
    devtools((set) => ({
        status: 'not-authenticated',
        userId: null,
        userName: null,
        token: null,
        errorMessage: null,
        setToken: (token: string) => {
            set({ token });
        },

        checkingCredentials: async () => {
            set({ status: 'checking' });
        },

        setAuthStatus: (status: AuthState['status']) => {
            set({ status });
        },
        logout: () => {
            set({ status: 'not-authenticated', userId: null, token: null });
        },
    }))
);

export default useAuthStore;
