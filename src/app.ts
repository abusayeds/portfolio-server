import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./routes";
import globalErrorHandler from "./app/middlwares/globalErrorHandler";
const app: Application = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5173"],
    credentials: true,
  })
);
app.use("/", router);
app.get("/", (req: Request, res: Response) => {
  res.send("Travel Tips Server is Running !! ");
});
app.use(globalErrorHandler);
export default app;
