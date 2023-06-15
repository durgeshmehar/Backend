const express = require('express')
const controller =require('../controller/productController')
const productRouter =express.Router();


productRouter
.get("/", controller.frontpage)
.get("/", controller.getAllProducts)
.get("/:id", controller.getSingleProduct)
.post("/", controller.createProduct)
.patch("/:id", controller.updataProduct)
.put("/:id", controller.replaceProduct)
.delete("/:id", controller.deleteProduct)

exports.router=productRouter;