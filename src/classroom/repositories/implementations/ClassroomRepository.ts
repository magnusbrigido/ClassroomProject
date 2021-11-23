import { Classroom } from "../../entities/Classroom";
import { IClassroomRepository } from "../IClassroomRepository";

class ClassroomRepository implements IClassroomRepository {
  private classrooms: Classroom[];

  private static INSTANCE: ClassroomRepository;

  private constructor() {
    this.classrooms = [];
  }

  public static getInstance() {
    if(!ClassroomRepository.INSTANCE) {
      ClassroomRepository.INSTANCE = new ClassroomRepository();
    }

    return ClassroomRepository.INSTANCE;
  }

  create(name: string, description: string, teacherId: string): Classroom {
    const classroom = new Classroom();

    Object.assign(classroom, {
      name,
      description,
      teacherId
    });

    this.classrooms.push(classroom);

    return classroom;
  }
}

export { ClassroomRepository };