import { v4 as uuid } from "uuid";
import bcrypt from "bcrypt";
import { sessionsCollection, usersCollection } from "../database/db.js";

export async function postSignIn(req, res) {
  const user = req.userSignIn;
  const token = uuid();

  try {
    await sessionsCollection.insertOne({
      token,
      userId: user._id,
    });
    res.send({
      token,
      name: user.name,
    });
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function postSignUp(req, res) {
  const newUser = req.body;

  const passwordHash = bcrypt.hashSync(newUser.password, 10);

  try {
    const user = await usersCollection.insertOne({
      ...newUser,
      password: passwordHash,
    });
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
