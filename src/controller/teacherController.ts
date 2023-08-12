import {Request, Response} from "express";

import teacherService from "../service/teacherService";


class TeacherController {

    findAll = async (req: Request, res: Response) => {
        let listProduct = await teacherService.getAll();
        res.json(listProduct);
    }

    add = async (req: Request, res: Response) => {
        let listProduct = await teacherService.add(req.body);
        res.json(listProduct);
    }

    delete = async (req: Request, res: Response) => {
        let result1 = await teacherService.delete(req.body.id);
        res.json(result1);
    }


    update = async (req: Request, res: Response) => {
        await teacherService.update(req.params.id, req.body);
        res.json('Sửa thành công')
    }
    findById = async (req, res) => {
        let list = await teacherService.findById(req.params.id);
        res.json(list)
    }

}

export default new TeacherController();
