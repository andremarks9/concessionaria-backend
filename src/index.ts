import { app } from "./controller/app";
import { adminRouter } from "./router/AdminRouter";
import { carsRouter } from "./router/CarsRouter";

app.use("/admin", adminRouter);
app.use("/cars", carsRouter);
