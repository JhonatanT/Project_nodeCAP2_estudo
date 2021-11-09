import { Specification } from "../model/Specification";

interface ISpecificationDTO {
    name: string
    description: string
}

interface ISpecificationRepository {
    create({ name, description }: ISpecificationDTO): void
    find(name: string): Specification
}

export { ISpecificationRepository, ISpecificationDTO }