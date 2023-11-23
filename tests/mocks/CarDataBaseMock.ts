import { Status } from "../../src/business/CarBusiness";
import { CarRepository } from "../../src/business/CarRepository";
import { carMock1, carMock2, carMock3 } from "./CarMock";

export class CarDataBaseMock {
  getCars = async () => {
    return [carMock1, carMock2, carMock3];
  };

  insertCar = async (model: string, year: number, price: number) => {};
  deleteCar = async (id: number) => {};
  updateCar = async (id: number, price: number, status: Status) => {};
}
