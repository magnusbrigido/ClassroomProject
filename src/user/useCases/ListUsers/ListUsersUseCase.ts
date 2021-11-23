import { UsersRepository } from "../../repositories/implementations/UsersRepository";

class ListUsersUseCase {
  constructor(private usersRepository: UsersRepository) {}

  execute() {
    const users = this.usersRepository.list();

    return users;
  }
}

export { ListUsersUseCase };