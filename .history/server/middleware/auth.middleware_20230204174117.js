import jwt from "jsonwebtoken";


const verifyToken = async( req, res, next ) =>
{
    try {
        let token = req.header( "Authorization" )
        if ( !token ) return res.status( 403 ).json( { mesage: "Access denied" } )
        if ( token.startsWith( "Bearer " ) )
        {
            token = token.slice(7, token.length).trimLeft()
        }
        const verified = jwt.verify( token, process.env.JWT_SECRET )
        req.user() = verified;
        next()


    } catch (error) {
        
    }
}