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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserAnonymous = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = require("../config/config");
const users_repository_1 = require("../repository/users.repository");
const createUserAnonymous = (body) => __awaiter(void 0, void 0, void 0, function* () {
    const passwordHash = yield bcrypt_1.default.hash(body.password, parseInt(config_1.CONFIGURATIONS.HASH_SALT || "12"));
    const user = Object.assign(Object.assign({}, body), { password: passwordHash });
    const _a = yield (0, users_repository_1.insertUser)(user), { password, lastLoginAt, accessToken } = _a, createdUser = __rest(_a, ["password", "lastLoginAt", "accessToken"]);
    return createdUser;
});
exports.createUserAnonymous = createUserAnonymous;
