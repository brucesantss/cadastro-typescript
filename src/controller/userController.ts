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
        const findUser = User.findOne({ email });

        if(findUser){
            return res.status(400).json({ message: 'email já cadastrado.'})
        }

        //criando nova conta
        const newUser = new User({name, email, pass});
        await newUser.save();

        return res.status(201).json({ message: 'conta criada.'})
    }catch(err){
        console.log(err);
        return res.status(400).json({ message:'erro no servidor :(' });
    }
}

export const getUsers = (req: Request, res: Response) => {
    try{
    

    }catch(err){
        console.error('erro:', err)
        return res.status(400).json({ message:'erro no servidor :(' });
    }
}

