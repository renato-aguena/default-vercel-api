"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.createSchema = joi_1.default.object({
    name: joi_1.default.string().min(2).max(255).required(),
    email: joi_1.default.string().email().required(),
    phone: joi_1.default.string().min(5).max(22),
    password: joi_1.default.string().min(8).max(32).required(),
    state: joi_1.default.string().min(2).max(2).required(),
    crm: joi_1.default.string().min(7).max(13).required(),
});
