import { Status } from "../business/CarBusiness";
import { CarRepository } from "../business/CarRepository";
import { Car } from "../model/Car";
import { BaseDataBase } from "./BaseDataBase";

export class CarDataBase extends BaseDataBase implements CarRepository {
  getCars = async (): Promise<Car[]> => {
    try {
      const cars = await BaseDataBase.connection("cars").select();
      return cars;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  insertCar = async (
    model: string,
    year: number,
    price: number,
    status: Status
  ): Promise<void> => {
    try {
      await BaseDataBase.connection("cars").insert({
        model,
        year,
        price,
        status,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  deleteCar = async (id: number): Promise<void> => {
    try {
      await BaseDataBase.connection("cars").delete().where({ id });
    } catch (error: any) {
      throw new Error("The car could not be deleted!");
    }
  };

  updateCar = async (
    id: number,
    price: number,
    status: Status
  ): Promise<void> => {
    try {
      if (price) {
        await BaseDataBase.connection("cars").update({ price }).where({ id });
      }

      if (status) {
        await BaseDataBase.connection("cars").update({ status }).where({ id });
      }
    } catch (error: any) {
      throw new Error("The car could not be updated!");
    }
  };
}
