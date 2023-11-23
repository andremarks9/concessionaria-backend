import express from "express";
import { AdminController } from "../controller/AdminController";
import { AdminBusiness } from "../business/AdminBusiness";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/AuthenticatorData";
import { AdminDataBase } from "../data/AdminDataBase";
import { IdGenerator } from "../services/GenerateId";

export const adminRouter = express.Router();

const adminController = new AdminController(
  new AdminBusiness(
    new HashManager(),
    new Authenticator(),
    new AdminDataBase(),
    new IdGenerator()
  )
);

adminRouter.post("/signup", adminController.signUp);
adminRouter.post("/login", adminController.login);
