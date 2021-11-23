import { Request, Response } from "express";
import { CreateClassroomUseCase } from "./CreateClassroomUseCase";

class CreateClassroomController {
  constructor(private createClassroomUseCase: CreateClassroomUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    const { name, description } = request.body;

    const classroom = this.createClassroomUseCase.execute({
      teacherId: id,
      name,
      description
    });

    return response.status(201).json(classroom);
  }
}

export { CreateClassroomController };