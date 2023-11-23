import { CarRepository } from "./CarRepository";

export enum Status {
  Disponível = "Disponível",
  Vendido = "Vendido",
}

export class CarBusiness {
  constructor(private carDataBase: CarRepository) {}

  getCars = async () => {
    const cars = await this.carDataBase.getCars();

    return cars;
  };

  insertCar = async (model: string, year: number, price: number) => {
    const status = Status.Disponível;

    if (!model || !year || !price) {
      throw new Error("It is missing a parameter!");
    }

    await this.carDataBase.insertCar(model, year, price, status);
  };

  deleteCar = async (id: number) => {
    await this.carDataBase.deleteCar(id);
  };

  updateCar = async (id: number, price: number, status: Status) => {
    await this.carDataBase.updateCar(id, price, status);
  };
}
