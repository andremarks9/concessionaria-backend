import { AdminRepository } from "./../../src/business/AdminRepository";
import { Admin } from "../../src/model/Admin";
import { adminMock1, adminMock2 } from "./AdminMock";

export class AdminDataBaseMock implements AdminRepository {
  signUp = async (admin: Admin): Promise<void> => {};

  login = async (username: string): Promise<Admin | undefined> => {
    if (username === "Fabio") {
      return adminMock1;
    } else if (username === "Fabia") {
      return adminMock2;
    } else {
      undefined;
    }
  };

  findByUsername = async (username: string): Promise<Admin | undefined> => {
    if (username === "Fabio") {
      return adminMock1;
    } else if (username === "Fabia") {
      return adminMock2;
    } else {
      undefined;
    }
  };
}
