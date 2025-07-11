const bcrypt = require('bcryptjs')
const userModel = require('../../models/userModel')
const jwt = require('jsonwebtoken');

async function userSignInController(req, res) {
    try {
        const { email, password } = req.body

        if (!email) {
            throw new Error("Please provide email")
        }
        if (!password) {
            throw new Error("Please provide password")
        }

        const user = await userModel.findOne({ email })

        if (!user) {
            throw new Error("User not found")
        }

        const checkPassword = await bcrypt.compare(password, user.password)


        if (checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email,
            }

            const secretKey = process.env.TOKEN_SECRET_KEY
            const token = jwt.sign({ id: tokenData._id }, secretKey)
            const decoded = jwt.verify(token, secretKey)
            console.log(decoded,"decodeddecodeddecodeddecoded")
            

            user.token = token
            user.loginTime = decoded.iat
            user.save()
            res.status(201).json({
                data: user,
                success: true,
                error: false,
                message: "Login Successfully!"
            })


        } else {
            throw new Error("Please check Password")
        }







    } catch (err) {
        res.json({
            message: err.message || err,
            error: true,
            success: false,
        })
    }

}

module.exports = userSignInController