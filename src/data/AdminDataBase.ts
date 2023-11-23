import { AdminRepository } from "../business/AdminRepository";
import { Admin } from "../model/Admin";
import { BaseDataBase } from "./BaseDataBase";

export class AdminDataBase extends BaseDataBase implements AdminRepository {
  signUp = async (admin: Admin) => {
    try {
      await BaseDataBase.connection("admin").insert(admin);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  login = async (username: string) => {
    try {
      const result: Admin[] = await BaseDataBase.connection("admin")
        .select()
        .where({ username });

      return result[0] && Admin.toUserModel(result[0]);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  findByUsername = async (username: string) => {
    try {
      const result: Admin[] = await BaseDataBase.connection("admin")
        .select()
        .where({ username });

      return result[0] && Admin.toUserModel(result[0]);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
