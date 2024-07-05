import { Request, Response, NextFunction } from "express";

import { CONFIGURATIONS } from "../config/config";

export const superAdminAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers["x-access-token"];
  if (token !== CONFIGURATIONS.SUPER_ADMIN_TOKEN) {
    return res.json({ error: "Unauthorized" }).status(401);
  }
  return next();
};
