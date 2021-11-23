import { UsersRepository } from "../../repositories/implementations/UsersRepository";
import { ListUsersUseCase } from "./ListUsersUseCase";
import { ListUsersController } from "./ListUsersController";

const usersRepository = UsersRepository.getInstance();
const listUsersUseCase = new ListUsersUseCase(usersRepository);
const listUsersController = new ListUsersController(listUsersUseCase);

export { listUsersController };