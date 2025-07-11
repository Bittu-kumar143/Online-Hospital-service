const orderr = require("../models/orderModel")

module.exports = {
  orderCreate: async (req, res) => {
    try {
      const productIds = Array.isArray(req.body.products) ? req.body.products : [];

      const charactersAndNumbers = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
      const length = 10;
      let result = "";

      for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charactersAndNumbers.length);
        result += charactersAndNumbers[randomIndex];
      }

      const data = await orderr.create({
        ...req.body,
        userId: req.userId._id,
        orderId: result,
        products: productIds.map(id => ({ productId: id }))
      })

      return res.json({
        success: true,
        status: 200,
        message: "Order is placed successfully",
        body: data
      })

    } catch (error) {
      console.log(error)
    }
  },

  orderGetAll: async (req, res) => {
    try {
      const data = await orderr.find({ userId: req.userId._id }).populate("products.productId").populate("userId")

      return res.json({
        success: true,
        status: 200,
        message: "Here is your orders",
        body: data
      })

    } catch (error) {
      console.log(error)
    }
  },
  orderGetAllForAdmin: async (req, res) => {
    try {
      const data = await orderr.find().populate("products.productId").populate("userId")

      return res.json({
        success: true,
        status: 200,
        message: "Here is your orders",
        body: data
      })

    } catch (error) {
      console.log(error)
    }
  },

  singleOrderGet: async (req, res) => {
    try {
      const data = await orderr.findById({ _id: req.params.id })

      return res.json({
        success: true,
        status: 200,
        message: "Here is single order",
        body: data
      })

    } catch (error) {
      console.log(error)
    }
  },
  singleOrderGetForAdmin: async (req, res) => {
    try {
      const data = await orderr.findById({ _id: req.params.id }).populate("products.productId").populate("userId")

      return res.json({
        success: true,
        status: 200,
        message: "Here is single order",
        body: data
      })

    } catch (error) {
      console.log(error)
    }
  },

  orderDelete: async (req, res) => {
    try {
      await orderr.findByIdAndDelete({ _id: req.params.id })

      return res.json({
        success: true,
        status: 200,
        message: "Order is deleted successfully",
        body: {}
      })

    } catch (error) {
      console.log(error)
    }
  }


}
