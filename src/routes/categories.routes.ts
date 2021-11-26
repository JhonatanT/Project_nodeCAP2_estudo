import { request, response, Router } from "express";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import multer  from "multer";

const categoriesRouter = Router();

const upload = multer({
    dest:"./tmp",

})

categoriesRouter.post("/", (request, response) => {
    return createCategoryController.handle(request, response)
});

categoriesRouter.get("/", (request, response) => {
    return listCategoriesController.handle(request, response)
})

categoriesRouter.post('/import', upload.single("file"), (request, response) => {
    return importCategoryController.handle(request, response);
})

export { categoriesRouter }