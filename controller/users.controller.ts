import { Request, Response } from "express";
import User from '../models/user';
import user from '../models/user';


export const getUsers = async( req:Request, res: Response ) => {
    const users = await User.findAll();
    res.json({ users });
}

export const getUser = async ( req:Request, res: Response ) => {
    const { id } = req.params;
    const user = await User.findByPk( id );
    if (!user){
        res.status(404).json({
            msg: `The user by the Id ${id} is not exist`
        })
    }
    res.json({ user })
}

export const postUser = async ( req:Request, res: Response ) => {
    const { body } = req;
    try {
        const user = new User(body);
        await user.save();
        res.json( user )
    } catch (error) {
        console.error(error);
        res.status(500).json({
            msg: `Talk with the administrator`
        })
        
    }
}

export const putUser = ( req:Request, res: Response ) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUser',
        body,
        id
    })
}

export const deletUser = ( req:Request, res: Response ) => {
    const { id } = req.params;
    res.json({
        msg: 'deletUser',
        id
    })
}

