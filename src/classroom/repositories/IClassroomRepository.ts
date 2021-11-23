import { Classroom } from "../entities/Classroom";

interface IClassroomRepository {
  create(name: string, description: string, teacherId: string): Classroom;
}

export { IClassroomRepository };