import { CarBusiness } from "../src/business/CarBusiness";
import { CarDataBaseMock } from "./mocks/CarDataBaseMock";

const carBusinessMock = new CarBusiness(new CarDataBaseMock());

describe("Testing insertCar", () => {
  test("Return an error if model is empty", async () => {
    expect.assertions(1);
    try {
      await carBusinessMock.insertCar("", 1, 1);
    } catch (error: any) {
      console.log(error.message);
      expect(error.message).toBe("It is missing a parameter!");
    }
  });
  test("Return an error if year is empty", async () => {
    expect.assertions(1);
    try {
      await carBusinessMock.insertCar("palio", Number(), 12000);
    } catch (error: any) {
      console.log(error.message);
      expect(error.message).toBe("It is missing a parameter!");
    }
  });
  test("Return an error if price is empty", async () => {
    expect.assertions(1);
    try {
      await carBusinessMock.insertCar("palio", 2010, Number());
    } catch (error: any) {
      expect(error.message).toBe("It is missing a parameter!");
    }
  });
});
