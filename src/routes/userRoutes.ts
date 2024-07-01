import { Router } from "express";
import { createUser, getUsers } from "../controller/userController";

const router = Router();

router
    .post('/', createUser)
    .get('/', getUsers)

export default router;
