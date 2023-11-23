import { Admin } from "../model/Admin";
import { Authenticator } from "../services/AuthenticatorData";
import { IdGenerator } from "../services/GenerateId";
import { HashManager } from "../services/HashManager";
import { AdminRepository } from "./AdminRepository";

export class AdminBusiness {
  constructor(
    private hashManager: HashManager,
    private authenticator: Authenticator,
    private adminDataBase: AdminRepository,
    private generateID: IdGenerator
  ) {}

  signUp = async (username: string, password: string) => {
    if (!username || !password) {
      throw new Error("It is missing a parameter!");
    }

    const isUsernameFound = await this.adminDataBase.findByUsername(username);

    if (isUsernameFound) {
      throw new Error(
        "There is already an account registered with this username!"
      );
    }

    const id: string = this.generateID.generate();

    const hashPassword = await this.hashManager.hash(password);

    const token: string = this.authenticator.generateToken({ id });

    const admin: Admin = new Admin(id, username, hashPassword);

    await this.adminDataBase.signUp(admin);

    return token;
  };

  login = async (username: string, password: string) => {
    if (!username || !password) {
      throw new Error("It is missing a parameter!");
    }

    const admin: Admin | undefined = await this.adminDataBase.login(username);

    if (!admin) {
      throw new Error("Please insert the right username!");
    }

    const isPasswordCorrect = await this.hashManager.compare(
      password,
      admin.getPassword()
    );

    if (!isPasswordCorrect) {
      throw new Error("Please insert the right password!");
    }

    const token = this.authenticator.generateToken({ id: admin.getId() });

    return token;
  };
}
