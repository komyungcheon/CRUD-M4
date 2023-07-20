import {Request, Response} from "express";
import productService from "../service/productService";
import * as fs from "fs";
import teacherService from "../service/TeacherService";

class ProductController {
    private productService;

    constructor() {
        this.productService = productService;
    }

    findAll = async (req: Request, res: Response) => {
        let listProduct = await this.productService.getAll();
        res.json(listProduct);
    }

    add = async (req: Request, res: Response) => {
        let listProduct = await this.productService.add(req.body);
        res.json(listProduct);
    }

    delete = async (req: Request, res: Response) => {
        let result1 = await this.productService.deleteProduct(req.body.id);
        res.json(result1);
    }


    update = async (req: Request, res: Response) => {
        await productService.update(req.params.id, req.body);
        res.json('Sửa thành công')
    }
}

export default new ProductController();
