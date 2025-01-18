import express, {Request, Response} from "express";

const app = express();

app.use(express.json());

app.get("/", (req:Request, res:Response) => {
  res.send("Welcome to ratna-shrestha-nirman-sewa-backend");
});

export default app;
