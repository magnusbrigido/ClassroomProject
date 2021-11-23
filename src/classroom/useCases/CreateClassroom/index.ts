import { UsersRepository } from "../../../user/repositories/implementations/UsersRepository";
import { ClassroomRepository } from "../../repositories/implementations/ClassroomRepository";
import { CreateClassroomController } from "./CreateClassroomController";
import { CreateClassroomUseCase } from "./CreateClassroomUseCase";

const classroomRepository = ClassroomRepository.getInstance();
const usersRepository = UsersRepository.getInstance();
const createClassRoomUseCase = new CreateClassroomUseCase(classroomRepository, usersRepository);
const createClassroomController = new CreateClassroomController(createClassRoomUseCase);

export { createClassroomController };