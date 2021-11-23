import { Router } from "express";

import { createUserController } from "../user/useCases/CreateUser";
import { listUsersController } from "../user/useCases/ListUsers";

const userRoutes = Router();

userRoutes.post("/user", (request, response) => createUserController.handle(request, response));
userRoutes.get("/users", (request, response) => listUsersController.handle(request, response));

export { userRoutes };