/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import bcrypt from "bcrypt";

import { CONFIGURATIONS } from "../config/config";
import { insertUser } from "../repository/users.repository";

export const createUserAnonymous = async (body: any) => {
  const passwordHash = await bcrypt.hash(
    body.password,
    parseInt(CONFIGURATIONS.HASH_SALT || "12")
  );
  const user = {
    ...body,
    password: passwordHash,
  };

  const { password, lastLoginAt, accessToken, ...createdUser } =
    await insertUser(user);
  return createdUser;
};
