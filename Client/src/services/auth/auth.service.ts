import { SignInDto } from '@/dtos/signin.dto';
import { SignupDto } from '@/dtos/signup.dto';
import { LoginResponse } from '@/models/loginResponse.model';

import { AuthRepository } from '@/repositories/auth/auth.repository';
import { AxiosError } from 'axios';

export class AuthService {
    private authRepository: AuthRepository = new AuthRepository();

    constructor() {}

    async signUp(signUpDto: SignupDto) {
        return this.authRepository.signUp(signUpDto);
    }

    async signIn(signInDto: SignInDto): Promise<LoginResponse> {
        try {
            const { data } = await this.authRepository.signIn(signInDto);
            console.log(data);
            return data;
        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error);
                throw new Error(error.response?.data);
            }
            console.log(error);
            throw new Error('Unable to sign in');
        }
    }
}
