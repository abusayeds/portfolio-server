import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./routes";
import globalErrorHandler from "./app/middlwares/globalErrorHandler";
const app: Application = express();

app.use(express.json());

app.use(
  cors({
    origin: [
      "https://my-portfolio-iota-sepia-63.vercel.app",
      "http://localhost:5173",
    ],

    credentials: true,
  })
);
app.use("/", router);
app.get("/", (req: Request, res: Response) => {
  res.send("Portfolio server is Running !! ");
});
app.use(globalErrorHandler);
export default app;
