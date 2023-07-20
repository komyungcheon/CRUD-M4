"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const Teacher_1 = require("../entity/Teacher");
class TeacherService {
    constructor() {
        this.repository = data_source_1.AppDataSource.getRepository(Teacher_1.Teacher);
        this.getAll = async () => {
            return await this.repository.find();
        };
        this.save = async (data) => {
            return await this.repository.save(data);
        };
        this.findById = async (data) => {
            return await this.repository.findOne({ where: { id: data } });
        };
        this.delete = async (data) => {
            return await this.repository.delete(data);
        };
        this.update = async (id, data) => {
            return await this.repository.update(id, data);
        };
    }
}
exports.default = new TeacherService();
//# sourceMappingURL=TeacherService.js.map