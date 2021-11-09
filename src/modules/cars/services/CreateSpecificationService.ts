import { ISpecificationDTO, ISpecificationRepository } from "../repositories/ISpecificationRepository";

interface IRequest {
    name: string
    description: string
}

class CreateSpecificationService {

    constructor(private SpecificationRepository: ISpecificationRepository) { }

    execute({ name, description }: IRequest): void {

        this.SpecificationRepository.create({
            name, description
        })

    }

}
export { CreateSpecificationService }