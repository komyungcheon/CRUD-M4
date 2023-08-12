import {Router} from "express";
import teacherRouter from "./teacherRouter";



const router = Router();

router.use('/car', teacherRouter);


export default router;
