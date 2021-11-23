import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>;
  findByName(name: string): User | undefined;
  findById(id: string): User | undefined;
  list(): User[];
}

export { IUsersRepository };