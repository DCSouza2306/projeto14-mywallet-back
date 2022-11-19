import { usersCollection } from "../database/db.js";
import bcrypt from 'bcrypt'

export async function signInBodyValidation(req, res, next) {
  const { email, password } = req.body;

  const userExists = await usersCollection.findOne({ email });

  if (!userExists) return res.status(401).send({message: "Email não cadastrado"});

  const passwordValidation = bcrypt.compareSync(password, userExists.password);

  if(!passwordValidation) return res.status(401).send({message: "Senha incorreta"});

  req.userSignIn = userExists;

  next();
}
