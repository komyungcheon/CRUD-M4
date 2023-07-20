import {Request, Response} from "express";
import teacherService from "../service/TeacherService";

class TeacherController {
    findAll = async (req: Request, res: Response) => {
        let data = await teacherService.getAll();
        res.json(data);
    }

    add = async (req: Request, res: Response) => {
        let data = await teacherService.save(req.body);
        res.json(data);
    }

    update = async (req: Request, res: Response) => {
        await teacherService.update(req.params.id, req.body);
        res.json('Sửa thành công')
    }
    delete = async (req: Request, res: Response) => {
        await teacherService.delete(req.params.id);
        res.json('Xóa thành công')
    }


}

export default new TeacherController();
