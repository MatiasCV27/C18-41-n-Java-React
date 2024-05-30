import { AuthController } from '@/controllers/auth/auth.controller';
import { create, StateCreator } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const authController = new AuthController();
interface User {
    id: string;
    name: string;
    lastname: string;
    isActive: boolean;
    email: string;
    username: string;
    roles: string[];
}
type AuthStatus = 'authorized' | 'pending' | 'unauthorized';
interface AuthState {
    status: AuthStatus;
    user?: User;
    token?: string;

    signinUser: (email: string, password: string) => Promise<void>;
}

export const storeApi: StateCreator<AuthState> = (set) => ({
    status: 'unauthorized',
    token: undefined,
    user: undefined,

    signinUser: async (username: string, password: string) => {
        try {
            const { token, ...user } = await authController.signIn({
                username,
                password,
            });

            
            set({ status: 'authorized', token, user });
        } catch (error) {
            set({ status: 'unauthorized', token: undefined, user: undefined });
        }
    },
});

export const useAuthStore = create<AuthState>()(
    devtools(persist(storeApi, { name: 'auth-storage' }))
);
