import { v4 as uuid } from "uuid";
import { sessionsCollection, usersCollection } from "../database/db.js";


/* export async function postSignIn(req, res) {
  const { email, password } = req.body;

  const token = uuid();
} */

export async function postSignUp(req, res) {
  const newUser = req.body;

  const passwordHash = bcrypt.hashSync(newUser.password, 10);

  try {
    await usersCollection.insertOne({ ...newUser, password: passwordHash });
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
