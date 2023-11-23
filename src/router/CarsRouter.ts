import express from "express";
import { CarController } from "../controller/CarController";
import { CarBusiness } from "../business/CarBusiness";
import { CarDataBase } from "../data/CarDataBase";

export const carsRouter = express.Router();

const carController = new CarController(new CarBusiness(new CarDataBase()));

carsRouter.get("/", carController.getCars);
carsRouter.post("/", carController.insertCar);
carsRouter.delete("/:id", carController.deleteCar);
carsRouter.put("/:id", carController.updateCar);
