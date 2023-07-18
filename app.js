import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import analyzePdfRouter from "./routes/analyzePdf.router.js";

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 4000;

const app = express();

app.use(cors());
app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/document", analyzePdfRouter);

app.listen(port, () => {
  console.log(`app listening on port - ${port}`);
});
