import { Request, Response } from "express";
import { AdminBusiness } from "../business/AdminBusiness";
import { AdminDataBase } from "../data/AdminDataBase";

export class AdminController {
  constructor(private adminBusiness: AdminBusiness) {}

  signUp = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;

    try {
      const token = await this.adminBusiness.signUp(username, password);

      res.status(201).send(token);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  login = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;

    try {
      const token = await this.adminBusiness.login(username, password);

      res.status(200).send(token);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
