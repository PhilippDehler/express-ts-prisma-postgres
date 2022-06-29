import express, { Request, Response } from "express";
import { enviroment } from "./infrastructure/enviroment";
const app = express();

app.get("/*", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(enviroment.port, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${enviroment.port}`
  );
});
