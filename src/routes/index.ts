import { Router } from "express";
import { classroomRoutes } from "./classroom.routes";

import { userRoutes } from "./user.routes";

const router = Router();

router.use(userRoutes);
router.use(classroomRoutes);

export { router };