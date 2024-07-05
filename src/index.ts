import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { superAdminAuth } from "./middlewares/super-admin.middleware";
import { usersAnonymousRouter } from "./routes/users-anonymous";

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  return res.json({ application: process.env.APPLICATION });
});

app.get("/health-check", async (req: Request, res: Response) => {
  return res.json({ status: "ok" });
});

app.use(superAdminAuth);

app.use("/users", usersAnonymousRouter);

app.listen(port, () => {
  return console.log(`Server is listening on ${port}`);
});

export default app;
