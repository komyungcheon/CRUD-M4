
import {AppDataSource} from "../data-source";

import {Blog} from "../entity/blog";

class BlogService {
    private repository = AppDataSource.getRepository(Blog);

    getAll = async () => {
        let list = await this.repository.find();
        return list;
    }
}

export default new BlogService();
