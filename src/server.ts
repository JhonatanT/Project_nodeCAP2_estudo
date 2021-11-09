import express, { request, response } from "express"
import { categoriesRouter } from "./routes/categories.routes"

const app = express();

app.use(express.json())

app.use("/categories", categoriesRouter)

app.listen(3030, () => console.log("fVcK RUNNING 3030"))