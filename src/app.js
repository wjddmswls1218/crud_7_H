import express from "express";
import path from "path";
import helmet from "helmet";
import bodyParser from "body-parser";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.set("view eingne", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(morgan(`dev`));
app.use(express.static(path.join(__dirname, "/assets")));

app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`${PORT} server start`);
});
