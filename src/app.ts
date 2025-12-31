import express from "express";

import routes from "./routes/index.api";
import { globalErrorHandler } from "./helpers/globalErrorHandler";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);

//global error handler
app.use(globalErrorHandler);

export default app;
