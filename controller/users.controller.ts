import { Request, Response } from "express";
import User from '../models/user';


export const getUsers = async( req:Request, res: Response ) => {
    const users = await User.findAll();
    res.json({ users });
}

export const getUser = async ( req:Request, res: Response ) => {
    const { id } = req.params;
    const user = await User.findByPk( id );
    user ?
        res.json({ user }) :
        res.status(404).json({
            msg: `The user by the Id ${id} is not exist`
        })
}

export const postUser = async ( req:Request, res: Response ) => {
    const { body } = req;
    try {
        const existEmail = await User.findOne({
            where: {
                email: body.email
            }
        })
        if (existEmail) {
            return res.status(404).json({
                msg: `The Email ${body.email} it already exist`
            })
        }
        const user =  User.build( body );
        await user.save();
        res.json( user )
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Talk with the administrator`
        })
        
    }
}

export const putUser = async ( req:Request, res: Response ) => {
    const { id } = req.params;
    const { body } = req;
    try {
        const user = await User.findByPk( id );
        if ( !user ) {
            return res.status(404).json({
                msg: `The user with the id ${id} is not exist`
            })
        }
        await user.update( body );
        res.json( user );
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: `Talk with the administrator`
        })
        
    }
}

export const deletUser = async ( req:Request, res: Response ) => {
    const { id } = req.params;
    const user = await User.findByPk( id );
    if ( !user ) {
        return res.status(404).json({
            msg: `The user with the id ${id} is not exist`
        })
    }
    await user.update({ status:false })
    // await user.destroy();
    res.json(user)
}

