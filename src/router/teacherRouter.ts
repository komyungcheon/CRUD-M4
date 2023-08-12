import {Router} from "express";

import teacherController from "../controller/teacherController";

const teacherRouter = Router();

teacherRouter.get('/', teacherController.findAll);
teacherRouter.post('/', teacherController.add);
teacherRouter.delete('/:id', teacherController.delete);
teacherRouter.put('/:id', teacherController.update);
teacherRouter.get('/:id', teacherController.findById);

export default teacherRouter;
