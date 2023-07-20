"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productRouter_1 = __importDefault(require("./productRouter"));
const TeacherRouter_1 = __importDefault(require("./TeacherRouter"));
const BlogRouter_1 = __importDefault(require("./BlogRouter"));
const router = (0, express_1.Router)();
router.use('/products', productRouter_1.default);
router.use('/teachers', TeacherRouter_1.default);
router.use('/blog', BlogRouter_1.default);
exports.default = router;
//# sourceMappingURL=router.js.map