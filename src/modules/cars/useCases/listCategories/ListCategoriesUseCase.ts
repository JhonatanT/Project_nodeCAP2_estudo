import { Category } from "../../model/Category";
import { ICategoriesRespoitory } from "../../repositories/ICategoriesRespoitory";


class ListCategoriesUseCase {
    constructor(private categoriesRepository: ICategoriesRespoitory) { }

    execute(): Category[] {

        const categories = this.categoriesRepository.list()

        return categories

    }


}
export { ListCategoriesUseCase }