import { IUsersRepository } from "../../../user/repositories/IUsersRepository";
import { Classroom } from "../../entities/Classroom";
import { IClassroomRepository } from "../../repositories/IClassroomRepository";

interface IRequest {
  teacherId: string;
  name: string;
  description: string;
}

class CreateClassroomUseCase {
  constructor(
    private classroomRepository: IClassroomRepository,
    private usersRepository: IUsersRepository
    ) {}

  execute({ teacherId, name, description }: IRequest): Classroom {
    const user = this.usersRepository.findById(teacherId);

    if(!user.isTeacher) throw new Error("Only teachers can create a classroom");

    const classroom = this.classroomRepository.create(name, description, teacherId);

    return classroom;
  }
}

export { CreateClassroomUseCase };