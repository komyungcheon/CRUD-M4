import { Teacher } from "../entity/Teacher";
declare class TeacherService {
    private repository;
    getAll: () => Promise<Teacher[]>;
    save: (data: any) => Promise<any>;
    findById: (data: any) => Promise<Teacher>;
    delete: (data: any) => Promise<import("typeorm").DeleteResult>;
    update: (id: any, data: any) => Promise<import("typeorm").UpdateResult>;
}
declare const _default: TeacherService;
export default _default;
