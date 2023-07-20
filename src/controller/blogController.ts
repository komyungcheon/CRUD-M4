import {Request, Response} from "express";
import BlogService from "../service/blogService";


class BlogController {

    findAll = async (req: Request, res: Response) => {
        let listBlog = await BlogService.getAll();
        res.json(listBlog);
    }

}

export default new BlogController();
