import { authRepo } from "./auth.repo";

class AuthService {
    login(data: {}) {
        return authRepo.login(data);
    }

    // register(data) {
    //     return authRepo.register(data);
    // }

    // fetchActiveAccount() {
    //     return authRepo.fetchActiveAccount();
    // }
    // logout() {
    //     return authRepo.logout();
    // }
}

export const authService = new AuthService();