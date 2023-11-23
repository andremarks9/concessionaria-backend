import { Car } from "../model/Car";
import { Status } from "./CarBusiness";

export interface CarRepository {
  getCars(): Promise<Car[]>;
  insertCar(
    model: string,
    year: number,
    price: number,
    status: Status
  ): Promise<void>;
  deleteCar(id: number): Promise<void>;
  updateCar(id: number, price: number, status: Status): Promise<void>;
}
