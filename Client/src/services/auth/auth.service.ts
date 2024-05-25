import { SignupDto } from "@/dtos/signup.dto";
import { AuthRepository } from "@/repositories/auth/auth.repository";

export class AuthService {
    private authRepository: AuthRepository = new AuthRepository();

    constructor() {}

    async signUp(signUpDto: SignupDto) {
        return this.authRepository.signUp(signUpDto);
}
}