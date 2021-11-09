
interface ISpecificationDTO {
    name: string
    description: string
}

interface ISpecificationRepository {
    create({ name, description }: ISpecificationDTO): void
}

export { ISpecificationRepository, ISpecificationDTO }