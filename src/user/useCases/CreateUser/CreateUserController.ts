import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, password, isTeacher } = request.body;

    const user = await this.createUserUseCase.execute({ name, password, isTeacher });

    return response.status(201).json(user);
  }
}

export { CreateUserController };