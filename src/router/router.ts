import {Router} from "express";
import teacherRouter from "./teacherRouter";
import {userRouter} from "./userRouter";



const router = Router();

router.use('/teacher', teacherRouter);
router.use('', userRouter);


export default router;
