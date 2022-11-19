import { walletSchema } from "../models/walletSchema.js";
import dayjs from "dayjs";

export async function walletBodyValidation(req, res, next){
    const user = req.user;

    const { value, description, type, date } = req.body;
  
    const newIncomeOrExpense = {
      name: user.name,
      value,
      description,
      type,
      date
    }

    const {error} = walletSchema.validate(newIncomeOrExpense, {abortEarly: false});

    if(error){
        const errors = error.details.map((detail) => detail.message);
        console.log("erro ta aqui");
        return res.status(400).send({message: errors})
    }

    req.incomeOrExpense = newIncomeOrExpense;

    next();
}