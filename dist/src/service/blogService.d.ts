import { Blog } from "../entity/blog";
declare class BlogService {
    private repository;
    getAll: () => Promise<Blog[]>;
}
declare const _default: BlogService;
export default _default;
