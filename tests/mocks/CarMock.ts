import { Car, statusCar } from "../../src/model/Car";

export const carMock1 = new Car(1, "palio", 2010, 15000, statusCar.Disponível);
export const carMock2 = new Car(2, "corsa", 2011, 20000, statusCar.Disponível);
export const carMock3 = new Car(3, "gol", 2012, 25000, statusCar.Vendido);
