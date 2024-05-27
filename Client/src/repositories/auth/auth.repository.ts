import { SignupDto } from '@/dtos/signup.dto';
import HttpClient from '@/utils/HttpClient/HttpClient.utils';

const apiURL = import.meta.env.VITE_API_URL;

console.log(apiURL);
export class AuthRepository {
    private httpClient: HttpClient = new HttpClient(`${apiURL}/auth`);
    constructor() {}

    async signUp(signUpDto: SignupDto) {
        return await this.httpClient.post('/register', signUpDto);
    }
}
