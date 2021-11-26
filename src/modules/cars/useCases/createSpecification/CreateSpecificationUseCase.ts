import { ISpecificationDTO, ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string
    description: string
}

class CreateSpecificationUseCase {

    constructor(private SpecificationRepository: ISpecificationRepository) { }

    execute({ name, description }: IRequest): void {

        const spec = this.SpecificationRepository.find(name)

        if (spec) {
            throw new Error("Specification already exists")
        }

        this.SpecificationRepository.create({
            name, description
        })

    }

}
export { CreateSpecificationUseCase }