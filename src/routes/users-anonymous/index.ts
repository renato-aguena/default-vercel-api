import { Request, Response, Router } from "express";
import { createUserAnonymous } from "../../services/users.anonymous.service";
import { createSchema } from "./validators";

export const usersAnonymousRouter = Router();

usersAnonymousRouter.post("/", async (req: Request, res: Response) => {
  try {
    const validatorBody = createSchema.validate(req.body);
    if (validatorBody.error) {
      return res.status(500).json({ error: validatorBody.error });
    }
    const user = await createUserAnonymous(req.body);
    return res.json(user);
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});
