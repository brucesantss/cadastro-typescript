import { Request, Response } from "express"
import User from "../models/User";

export const createUser = async (req: Request, res: Response) => {

    try{
        const { name, email, pass } = req.body; 
        //campos obrigatórios
        if(!name || !pass || !email){
            return res.status(400).json({ message: 'campos obrigatórios: name, email e pass.'})
        }
        //usuário já existente
        const findUser = await User.findOne({ email });

        if(!findUser){
            //criando nova conta
            const newUser = new User({name, email, pass});
            await newUser.save();
        }else{
            return res.status(409).json({ message: 'esse email já está sendo utilizado.' })
        }

        return res.status(201).json({ message: 'conta criada.'})
    }catch(err){
        console.log(err);
        return res.status(400).json({ message:'erro no servidor :(' });
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try{
        const users = await User.find();

        return res.status(200).json({ message: users });
    }catch(err){
        console.error('erro:', err)
        return res.status(400).json({ message:'erro no servidor :(' });
    }
}

