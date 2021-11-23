import { Router } from "express";
import { createClassroomController } from "../classroom/useCases/CreateClassroom";

const classroomRoutes = Router();

classroomRoutes.post("/:id/classroom", 
  (request, response) => createClassroomController.handle(request, response));

export { classroomRoutes };