import { Request, Response } from "express"
import User from "../models/User";

export const createUser = async (req: Request, res: Response) => {

    try{
        const { name, email, pass } = req.body; 

        if(!name || !pass || !email){
            return res.status(201).json({ message: 'campos obrigatórios: name, email e pass.'})
        }

        const newUser = new User({name, email, pass});
        await newUser.save();

        return res.status(201).json({ message: 'conta criada.'})
    }catch(err){
        console.log(err);
        return res.status(400).json({ message:'erro no servidor :(' });
    }
}

