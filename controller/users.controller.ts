import { Request, Response } from "express";
import User from '../models/user';


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

export const postUser = ( req:Request, res: Response ) => {
    const { body } = req;
    res.json({
        msg: 'postUser',
        body
    })
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

