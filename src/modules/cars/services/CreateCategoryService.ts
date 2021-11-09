import { ICategoriesRespoitory } from "../repositories/ICategoriesRespoitory";

interface IRequest {
    name: string
    description: string
}

class CreateCategoryService {
    constructor(private categoriesRepository: ICategoriesRespoitory) {

    }

    execute({ name, description }: IRequest): void {

        const categoriesRepository = this.categoriesRepository.findByName(name)

        if (categoriesRepository) {
            throw new Error("Category already exist")
        }

        this.categoriesRepository.create({ name, description })
    }

}
export { CreateCategoryService }