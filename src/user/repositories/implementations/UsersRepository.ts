import { hash } from "bcryptjs";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if(!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  async create({ name, password, isTeacher }: ICreateUserDTO) {
    const user = new User();
    
    const hashedPassword = await hash(password, 8);

    Object.assign(user, {
      name,
      password: hashedPassword,
      isTeacher
    });

    this.users.push(user);

    return user;
  }

  findByName(name: string): User | undefined {
    const user = this.users.find(user => user.name === name);

    return user;
  }

  findById(id: string): User | undefined {
    const user = this.users.find(user => user.id === id);

    return user;
  }

  list() {
    return this.users;
  }
}

export { UsersRepository };