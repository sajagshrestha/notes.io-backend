import "./env.js";
import "./db.js";

import express from "express";
import cors from "cors";

import apiRoutes from "./routes/index.js";
import * as errorHandler from "./middlewares/errorHandler.js";

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.use("/api", apiRoutes);
app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.methodNotAllowed);

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
