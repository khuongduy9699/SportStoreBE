const express = require('express');
const routerAPI = express.Router();
const {
    postCreateCategory, postUpdateCategory, postDeleteCategory, getCategories,
    postCreateProduct,  postUpdateProduct, postDeleteProduct, getProducts,
    postCreatePost,  postUpdatePost, postDeletePost, getPosts,
    postCreateImage,  postUpdateImage, postDeleteImage, getImages,
    postCreateCart, postUpdateCart, postDeleteCart, getCarts, postCreateOrder, postUpdateCartStatus, getOrders, postUpdateOrder, postDeleteOrder, postDeleteCartUser
} = require('../controllers/APIController')

//category
routerAPI.get('/categories', getCategories)
routerAPI.post('/category', postCreateCategory)
routerAPI.put('/category', postUpdateCategory)
routerAPI.delete('/category', postDeleteCategory)
//Product
routerAPI.get('/products', getProducts)
routerAPI.post('/product', postCreateProduct)
routerAPI.put('/product', postUpdateProduct)
routerAPI.delete('/product', postDeleteProduct)
//Post
routerAPI.get('/posts', getPosts)
routerAPI.post('/post', postCreatePost)
routerAPI.put('/post', postUpdatePost)
routerAPI.delete('/post', postDeletePost)
//Image
routerAPI.get('/images', getImages)
routerAPI.post('/image', postCreateImage)
routerAPI.put('/image', postUpdateImage)
routerAPI.delete('/image', postDeleteImage)
//Cart
routerAPI.get('/carts', getCarts)
routerAPI.post('/cart', postCreateCart)
//update quantity
routerAPI.put('/cart', postUpdateCart)
//update status
routerAPI.put('/update-status', postUpdateCartStatus)
//delete cart users
routerAPI.delete('/cart-user', postDeleteCartUser)
routerAPI.delete('/cart', postDeleteCart)
//order
routerAPI.get('/orders', getOrders)
routerAPI.post('/order', postCreateOrder)
routerAPI.put('/order', postUpdateOrder)
routerAPI.delete('/order', postDeleteOrder)

module.exports = routerAPI;