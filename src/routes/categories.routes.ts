import { request, response, Router } from "express";
import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories";


const categoriesRouter = Router();
const categoriesRepository = new CategoriesRepository();


categoriesRouter.post("/", (request, response) => {
    return createCategoryController.handle(request, response)
});

categoriesRouter.get("/", (request, response) => {
    return listCategoriesController.handle(request, response)
})

export { categoriesRouter }