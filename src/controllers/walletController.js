import { walletCollection } from "../database/db.js";

export async function getWallet(req, res) {
  const user = req.user;

  try {
    const wallet = await walletCollection.find({ name: user.name }).toArray();
    res.send(wallet);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export async function postWallet(req, res) {
  const newLaunchs = req.Launchs;
  try {
    await walletCollection.insertOne(newLaunchs);
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
