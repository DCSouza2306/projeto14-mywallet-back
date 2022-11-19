import { usersCollection } from "../database/db.js";
import bcrypt from 'bcrypt'

export async function signInBodyValidation(req, res, next) {
  const { email, password } = req.body;

  const userExists = await usersCollection.findOne({ email });

  if (!userExists) return res.sendStatus(401);

  const passwordValidation = bcrypt.compareSync(password, userExists.password);

  if(!passwordValidation) return res.sendStatus(401);

  req.userSignIn = userExists;

  next();
}
