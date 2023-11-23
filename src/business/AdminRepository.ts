import { Admin } from "../model/Admin";

export interface AdminRepository {
  signUp(admin: Admin): Promise<void>;
  login(username: string): Promise<Admin | undefined>;
  findByUsername(username: string): Promise<Admin | undefined>;
}
