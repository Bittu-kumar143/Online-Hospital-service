const jwt = require('jsonwebtoken')
const userModel = require('../models/userModel')

async function authToken(req,res,next){
    try {
        const secretKey = process.env.TOKEN_SECRET_KEY

        let verifyToken = req.headers.authorization || req.headers.authorization.startsWith("Bearer ")
        if (!verifyToken) {
            return res.json({
                success: false,
                status: 404,
                message: "There is not token",
                body: {}
            })
        } else {
            const token = verifyToken.split(" ")[1]
            const tokenInfo = jwt.verify(token, secretKey)
            const user = await userModel.findById({ _id: tokenInfo.id })

            if (token === user.token) {
               
                req.userId = user
                next()

            } else {
                return res.json({
                    success: false,
                    status: 404,
                    message: "Insert new token",
                })
            }

        }

    } catch (error) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: "There is no token ,insert token first",
            body: {}
        });
    }
}


module.exports = authToken