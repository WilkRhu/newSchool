const jwt = require("jsonwebtoken");
const connect = require("../../config/connect");


const authAdmin =  (req, res, next) => {
    const token_header = req.headers.berear;

    if(!token_header) return res.status(401).send({error: "Token not informed!"});
    
    jwt.verify(token_header, process.env.KEY_CRYPT, async (err, decoded) =>{
        if(err){
            if(err.message === "invalid token"){
                return res.status(400).json({error: "Invalid token"});
            } else if(err.message === "jwt expired") {
                return res.status(401).send({error: "Invalid Session!"});  
            } else if (err){
                return res.status(400).json(err);
            }
        } 
        const { email, type } = decoded;
        const pass = await connect("users").select("*").where("email", email);
        if(pass){
            res.locals.auth_data = decoded;
            if (type === "admin"){
                return next();
            } else {
                return res.status(401).json({error: "Unauthorized user type!"});
            }
        } else {
            return res.status(401).json({error: "Not authorized!"});
        }
    });
};

module.exports = {
    authAdmin
};