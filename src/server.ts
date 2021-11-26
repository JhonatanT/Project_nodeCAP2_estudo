import express from "express";
import swaggerUi from 'swagger-ui-express';
import { router } from "./routes";
import swaggerFile from './swagger.json';
//ver sobre sqs e polling
const app = express(); 

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.listen(3030, () => console.log("fVcK RUNNING 3030"))