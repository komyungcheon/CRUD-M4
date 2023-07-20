import {Router} from "express";
import productRouter from "./productRouter";
import teacherRouter from "./TeacherRouter";
import BlogRouter from "./BlogRouter";

const router = Router();
router.use('/products', productRouter);
router.use('/teachers', teacherRouter);
router.use('/blog', BlogRouter);

export default router;
