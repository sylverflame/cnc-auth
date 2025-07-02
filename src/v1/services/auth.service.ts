import { userRepository } from "../repositories/user.repository";
import { RegisterUser } from "../utils/schemas";

export const authService = {
  async registerUser(userData: RegisterUser) {
    await userRepository.createUser(userData);
  },
};
