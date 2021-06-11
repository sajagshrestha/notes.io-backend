import "./env.js";
import "./db.js";

import express from "express";

import apiRoutes from "./routes/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use("/api", apiRoutes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
