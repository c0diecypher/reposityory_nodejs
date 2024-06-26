const Router = require("express")
const router = new Router()
const productController = require("../controllers/product.controller")

router.get("/products/", productController.getProducts)
router.get("/products/:id", productController.getProduct)
router.get("/product", productController.getProductsLimit)
router.get("/filter", productController.getFilter)
router.post("/create", productController.createRequisites)
module.exports = router
