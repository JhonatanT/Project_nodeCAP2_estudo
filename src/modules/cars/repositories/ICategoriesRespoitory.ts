import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string
    description: string
}

interface ICategoriesRespoitory {
    findByName(name: string): Category
    list(): Category[]
    create({ name, description }: ICreateCategoryDTO): void
}

export { ICategoriesRespoitory, ICreateCategoryDTO }