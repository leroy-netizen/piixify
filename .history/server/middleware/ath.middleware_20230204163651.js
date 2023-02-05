import { Jwt } from "jsonwebtoken";


const verifyToken = async( req, res, next ) =>
{
    try {
        let token = req.header( "Authorization" )
        if(!token) return res.status()

    } catch (error) {
        
    }
}