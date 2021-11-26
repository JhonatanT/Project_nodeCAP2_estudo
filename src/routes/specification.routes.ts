import { request, response, Router } from "express"
import { SpecificationRepository } from "../modules/cars/repositories/implemetations/SpecificationRepository";
import { createSpecificationController } from "../modules/cars/useCases/createSpecification";

const specificationsRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationsRoutes.post("/", (request, response) => {
   
    return createSpecificationController.handle(request, response)

})

export { specificationsRoutes }