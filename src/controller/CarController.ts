import { CarBusiness } from "./../business/CarBusiness";
import { Request, Response } from "express";

export class CarController {
  constructor(private carBusiness: CarBusiness) {}

  getCars = async (req: Request, res: Response): Promise<void> => {
    try {
      const cars = await this.carBusiness.getCars();
      res.status(200).send(cars);
    } catch (error: any) {
      res.status(404).send(error.message);
    }
  };

  insertCar = async (req: Request, res: Response): Promise<void> => {
    const { model, year, price } = req.body;

    try {
      await this.carBusiness.insertCar(model, year, price);
      res.status(201).send("Created sucessfully!");
    } catch (error: any) {
      res.status(404).send(error.message);
    }
  };

  deleteCar = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);

    try {
      await this.carBusiness.deleteCar(id);

      res.status(200).send("Deleted sucessfully!");
    } catch (error: any) {
      res.status(404).send(error.message);
    }
  };

  updateCar = async (req: Request, res: Response): Promise<void> => {
    const id = Number(req.params.id);
    const { price, status } = req.body;

    try {
      await this.carBusiness.updateCar(id, price, status);

      res.status(200).send("Update sucessfully!");
    } catch (error: any) {
      res.status(404).send(error.message);
    }
  };
}
