"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const blog_1 = require("../entity/blog");
class BlogService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(blog_1.Blog);
        this.getAll = async () => {
            let list = await this.repository.find();
            return list;
        };
    }
}
exports.default = new BlogService();
//# sourceMappingURL=blogService.js.map