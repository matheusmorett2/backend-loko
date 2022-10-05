import express, { Express } from "express";
import dotenv from "dotenv";
import Router from "./router";
import { exceptionMiddleware } from "./src/middlewares/exceptionMiddleware";

dotenv.config();
const port = process.env.PORT;

const app: Express = express();
app.use(express.json());
app.use(Router);
app.use(exceptionMiddleware);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
