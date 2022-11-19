import { sessionsCollection, usersCollection } from "../database/db.js";

export async function authValidation(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) return res.sendStatus(401);

  try {
    const sessions = await sessionsCollection.findOne({ token });
    const user = await usersCollection.findOne({ _id: sessions.userId });

    if (!user) return res.sendStatus(401);

    delete user.password;

    req.user = user;
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }

  next();
}
