import express from "express";
import routes from "./routes.js";

// init express
const app = express();
app.use(express.json());
app.use(routes);

export default app;
