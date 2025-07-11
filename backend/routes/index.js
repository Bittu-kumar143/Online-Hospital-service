const express = require('express')

const router = express.Router()

const userSignUpController = require("../controller/user/userSignUp")
const userSignInController = require('../controller/user/userSignIn')
const userDetailsController = require('../controller/user/userDetails')
const authToken = require('../middleware/authToken')
const userLogout = require('../controller/user/userLogout')
const {allUsers, countForDashboard, deleteSingleUser} = require('../controller/user/allUsers')
const updateUser = require('../controller/user/updateUser')
const allbookings = require('../controller/booking/allbooking')
const savebooking = require('../controller/booking/savebooking')
const { createContactUs, deleteSingleContactUs, getAllContactUs } = require('../controller/contactUsController')
const { addToCart, getAllCart, updateStatusInCart, deleteCart, deleteSingleCartItem, updateCart } = require('../controller/cartController')
const { orderCreate, orderGetAll, singleOrderGet, orderDelete, orderGetAllForAdmin } = require('../controller/orderController')
const { productCreate, productGet } = require('../controller/productController')



router.post("/signup",userSignUpController)
router.post("/signin",userSignInController)
router.get("/user-details",authToken,userDetailsController)
router.get("/userLogout",userLogout)
router.post("/savebooking",authToken ,savebooking)


////contact us

router.post("/createContactUs",createContactUs)


//admin panel 
router.get("/all-user",allUsers)
router.delete("/deleteSingleUser/:id",deleteSingleUser)
router.get("/countForDashboard",countForDashboard)
router.get("/all-booking",authToken,allbookings )
router.get("/getAllContactUs",getAllContactUs )
router.delete("/deleteSingleContactUs/:id",deleteSingleContactUs )
router.post("/update-user",authToken,updateUser)


//////////////////cart
router.post("/addToCart",authToken,addToCart)
router.get("/getAllCart",authToken,getAllCart)
router.put("/updateStatusInCart",authToken,updateStatusInCart)
router.delete("/deleteCart",authToken,deleteCart)
router.delete("/deleteSingleCartItem/:id",authToken,deleteSingleCartItem)
router.put("/updateCart/:id",authToken,updateCart)


///////////orders
router.post("/orderCreate",authToken,orderCreate)
router.get("/orderGetAll",authToken,orderGetAll)
router.get("/orderGetAllForAdmin",orderGetAllForAdmin)
router.get("/singleOrderGet/:id",authToken,singleOrderGet)
router.delete("/orderDelete/:id",orderDelete)


//////////products
router.post("/productCreate",productCreate)
router.get("/productGet",productGet)




module.exports = router