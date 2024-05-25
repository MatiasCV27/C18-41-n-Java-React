import { SignupDto } from '@/dtos/signup.dto';
import { AuthService } from '@/services/auth/auth.service';

export class AuthController {
    private authService: AuthService = new AuthService();
    constructor() {}

    async signUp(signUpDto: SignupDto) {
        return this.authService.signUp(signUpDto);
    }
}
