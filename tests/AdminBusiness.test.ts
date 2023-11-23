import { HashManager } from "./../src/services/HashManager";
import { AdminRepository } from "./../src/business/AdminRepository";
import { AdminBusiness } from "../src/business/AdminBusiness";
import { HashManagerMock } from "./mocks/HashManagerMock";
import { AuthenticatorMock } from "./mocks/AuthenticatorMock";
import { AdminDataBaseMock } from "./mocks/AdminDataBaseMock";
import { IdGeneratorMock } from "./mocks/IdGeneratorMock";
import { hash } from "bcryptjs";

const adminBusinessMock = new AdminBusiness(
  new HashManagerMock(),
  new AuthenticatorMock(),
  new AdminDataBaseMock(),
  new IdGeneratorMock()
);

describe("Testing signup", () => {
  test("Return an error if username is empty!", async () => {
    expect.assertions(1);

    try {
      await adminBusinessMock.signUp("", "123456");
    } catch (error: any) {
      expect(error.message).toBe("It is missing a parameter!");
    }
  });

  test("Return an error if password is empty!", async () => {
    expect.assertions(1);

    try {
      await adminBusinessMock.signUp("paulo", "");
    } catch (error: any) {
      expect(error.message).toBe("It is missing a parameter!");
    }
  });

  test("Return an error is the username already exist!", async () => {
    expect.assertions(1);

    try {
      await adminBusinessMock.signUp("Fabio", "123456");
    } catch (error: any) {
      expect(error.message).toBe(
        "There is already an account registered with this username!"
      );
    }
  });

  test("Verifying token when sign up is successful!", async () => {
    expect.assertions(1);

    try {
      const token = await adminBusinessMock.signUp("Fernando", "123456");

      expect(token).toEqual({ token: "token" });
    } catch (error: any) {}
  });
});

describe("Testing login!", () => {
  test("Return an error if username is empty!", async () => {
    expect.assertions(1);
    try {
      await adminBusinessMock.login("", "password");
    } catch (error: any) {
      expect(error.message).toBe("It is missing a parameter!");
    }
  });

  test("Return an error if password is empty!", async () => {
    expect.assertions(1);
    try {
      await adminBusinessMock.login("joao", "");
    } catch (error: any) {
      expect(error.message).toBe("It is missing a parameter!");
    }
  });

  test("Return an error if username is not found!", async () => {
    expect.assertions(1);
    try {
      await adminBusinessMock.login("Joao", "123456");
    } catch (error: any) {
      expect(error.message).toBe("Please insert the right username!");
    }
  });

  test("Return an error if password is wrong!", async () => {
    expect.assertions(1);
    try {
      await adminBusinessMock.login("Fabio", "123455");
    } catch (error: any) {
      expect(error.message).toBe("Please insert the right password!");
    }
  });
});
