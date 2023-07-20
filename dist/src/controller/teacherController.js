"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TeacherService_1 = __importDefault(require("../service/TeacherService"));
class TeacherController {
    constructor() {
        this.findAll = async (req, res) => {
            let data = await TeacherService_1.default.getAll();
            res.json(data);
        };
        this.add = async (req, res) => {
            let data = await TeacherService_1.default.save(req.body);
            res.json(data);
        };
        this.update = async (req, res) => {
            await TeacherService_1.default.update(req.params.id, req.body);
            res.json('Sửa thành công');
        };
        this.delete = async (req, res) => {
            await TeacherService_1.default.delete(req.params.id);
            res.json('Xóa thành công');
        };
    }
}
exports.default = new TeacherController();
//# sourceMappingURL=teacherController.js.map