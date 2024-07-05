"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.superAdminAuth = void 0;
const config_1 = require("../config/config");
const superAdminAuth = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (token !== config_1.CONFIGURATIONS.SUPER_ADMIN_TOKEN) {
        return res.json({ error: "Unauthorized" }).status(401);
    }
    return next();
};
exports.superAdminAuth = superAdminAuth;
