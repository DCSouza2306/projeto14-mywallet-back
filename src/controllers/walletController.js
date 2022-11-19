import { walletCollection } from "../database/db.js";
import dayjs from "dayjs";


export async function getWallet(req, res) {
  const user = req.user;

  res.send(user);
}

export async function postWallet(req, res) {

  try {
    await walletCollection.insertOne(newIncomeOrExpense);
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}
