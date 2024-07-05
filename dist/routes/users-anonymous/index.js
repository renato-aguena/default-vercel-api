"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersAnonymousRouter = void 0;
const express_1 = require("express");
const users_anonymous_service_1 = require("../../services/users.anonymous.service");
const validators_1 = require("./validators");
exports.usersAnonymousRouter = (0, express_1.Router)();
exports.usersAnonymousRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validatorBody = validators_1.createSchema.validate(req.body);
        if (validatorBody.error) {
            return res.status(500).json({ error: validatorBody.error });
        }
        const user = yield (0, users_anonymous_service_1.createUserAnonymous)(req.body);
        return res.json(user);
    }
    catch (error) {
        console.log("error", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}));
