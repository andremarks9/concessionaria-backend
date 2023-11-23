export enum statusCar {
  Disponível,
  Vendido,
}

export class Car {
  constructor(
    private id: number,
    private model: string,
    private year: number,
    private price: number,
    private status: statusCar
  ) {
    this.id = id;
    this.model = model;
    this.year = year;
    this.price = price;
    this.status = status;
  }

  public getId() {
    return this.id;
  }

  public getModel() {
    return this.model;
  }

  public getYear() {
    return this.year;
  }

  public getPrice() {
    return this.price;
  }

  public getStatus() {
    return this.status;
  }
}
