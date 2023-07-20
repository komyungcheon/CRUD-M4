import {Router} from "express";

import BlogController from "../controller/blogController";

const BlogRouter = Router();
BlogRouter.get('/', BlogController.findAll);
export default BlogRouter;