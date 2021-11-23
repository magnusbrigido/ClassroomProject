import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, password, isTeacher }: ICreateUserDTO) {
    const userAlreadyExists = this.usersRepository.findByName(name);

    if(userAlreadyExists) throw new Error("User already exists");

    const user = this.usersRepository.create({ name, password, isTeacher });

    return user;
  }
}

export { CreateUserUseCase };