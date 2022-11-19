import { walletSchema } from "../models/walletSchema.js";

export async function walletBodyValidation(req, res, next){
    const user = req.user;

    const { value, descritption, type } = req.body;
  
    const newIncomeOrExpense = {
      email: user.email,
      value,
      descritption,
      type,
      date: dayjs().format("DD/MM")
    }

    const {error} = walletSchema.validate(newIncomeOrExpense);

    if(error){
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors)
    }
}