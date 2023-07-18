const db = require('../models/index')
const { CreateCategory, UpdateCategory, DeleteCategory, getAllCategories } = require('../services/CRUDcategory')
const { UpdateProduct, CreateProduct, DeleteProduct, getAllProducts } = require('../services/CRUDproduct')
const { UpdatePost, CreatePost, DeletePost, getAllPosts, getPostById } = require('../services/CRUDpost')
const { CreateImage, UpdateImage, DeleteImage, getAllImages } = require('../services/CRUDimage')
const { CreateCart, UpdateCart, DeleteCart, getAllCarts, CreateOrder, UpdateCartStatus, getAllOrders, UpdateOrder, DeleteOrder, DeleteCartUser } = require('../services/CRUDcart')

const getCategories = async (req, res) => {
    let data = await getAllCategories();
    return res.status(200).json({
        data
    });
}
const postCreateCategory = async (req, res) => {
    let data = req.body;
    await CreateCategory(data);
    res.send("Create successfully!")
}
//Reading in CRUD
const getReadCategory = async (req, res) => {

}
const postUpdateCategory = async (req, res) => {
    let data = req.body;
    await UpdateCategory(data)

    res.send("Update successfully!")
}

const postDeleteCategory = async (req, res) => {
    let id = req.body.id;
    await DeleteCategory(id)
    res.send("Delete successfully!")
}


///------------------- Product
//read
const getProducts = async (req, res) => {
    let data = await getAllProducts();

    return res.status(200).json({
        data

    });
}
const getReadProduct = async (req, res) => {
    try {
        let data = await db.Product.findAll();
        res.render('readProduct.ejs', { data })
    } catch (e) {
        console.log(e)
    }
}
//Create
const postCreateProduct = async (req, res) => {
    let data = req.body;
    await CreateProduct(data)
    // res.redirect('/API/product')
    // console.log(data)
    res.send("Create successfully!")
}
const postUpdateProduct = async (req, res) => {
    let data = req.body;
    await UpdateProduct(data)
    // console.log(data)
    // res.redirect('/API/product')
    res.send("Update successfully!")
}
//Delete
const postDeleteProduct = async (req, res) => {
    let id = req.body.id;
    await DeleteProduct(id)
    // console.log(id)
    // res.redirect('/API/product')
    res.send("Delete successfully!")
}
///IMAGE ---------------------------------------
//read
const getImages = async (req, res) => {
    let data = await getAllImages();

    return res.status(200).json({
        data

    });
}
const getReadImage = async (req, res) => {
    try {
        let data = await db.Image.findAll();
        // res.render('readProduct.ejs', { data })
        res.send("Reading Image")
    } catch (e) {
        console.log(e)
    }
}
//Create
const postCreateImage = async (req, res) => {
    let data = req.body;
    await CreateImage(data)
    res.send("Create successfully!")
}
//Update in CRUD
const postUpdateImage = async (req, res) => {
    let data = req.body;
    await UpdateImage(data)
    // res.redirect('/API/image')
    // console.log(data)
    res.send("Update successfully!")
}
const postDeleteImage = async (req, res) => {
    let id = req.body.id;
    await DeleteImage(id)
    // res.redirect('/API/image')
    // console.log(id)
    res.send("Delete successfully!")
}

//Cart----------------------------------------
//C
const postCreateCart = async (req, res) => {
    let data = req.body;

    let CheckPhone = await db.Cart.findAll({ where: { Phone: data.Phone }, raw: true })

    let CheckStatus = CheckPhone.filter((event) => event.Status === 1)

    let CheckProduct = CheckStatus.find((e) => e.ProductID == data.ProductID)

    if (CheckProduct) {
        return res.status(200).json({ message: "The product is already in the cart!" })
    }
    await CreateCart(data)
    // console.log(CheckProduct)
    res.send("Create successfully!")
}
//U
const postUpdateCart = async (req, res) => {
    let data = req.body;
    await UpdateCart(data)
    // console.log(data)
    res.send("Update successfully!")
}
//u status
const postUpdateCartStatus = async (req, res) => {
    let data = req.body;
    await UpdateCartStatus(data)
    // console.log(data)
    res.send("Update status successfully!")
}
//D
const postDeleteCart = async (req, res) => {
    let id = req.body.id;
    await DeleteCart(id)
    res.send("Delete successfully!")
}
//Delete cart user
const postDeleteCartUser = async (req, res) => {
    let data = req.body;
    await DeleteCartUser(data)
    res.send("Delete successfully!")
}
//read
const getCarts = async (req, res) => {
    let data = await getAllCarts();

    return res.status(200).json({
        data

    });
    // res.send("R successfully!")
}


//-------------C
const postCreateOrder = async (req, res) => {
    let data = req.body;
    await CreateOrder(data)
    console.log(data)
    res.send("Create successfully!")

}
// R
const getOrders = async (req, res) => {
    let data = await getAllOrders();

    return res.status(200).json({
        data

    });
    // res.send("R successfully!")
}
//U
const postUpdateOrder = async (req, res) => {
    let data = req.body;
    await UpdateOrder(data)
    // console.log(data)
    res.send("Update successfully!")
}
//D
const postDeleteOrder = async (req, res) => {
    let id = req.body.id;
    await DeleteOrder(id)
    // console.log(id)
    res.send("Delete successfully!")
}

///------------------- Post
//read
const getPosts = async (req, res) => {
    let data = await getAllPosts();

    return res.status(200).json({
        data

    });
}
const getPostById1 = async (req, res) => {
    let data = await getPostById();

    return res.status(200).json({
        data

    });
}
const getReadPost = async (req, res) => {
    try {
        let data = await db.Post.findAll();
        res.render('readPost.ejs', { data })
    } catch (e) {
        console.log(e)
    }
}
//Create
const postCreatePost = async (req, res) => {
    let data = req.body;
    await CreatePost(data)
    // res.redirect('/API/Post')
    // console.log(data)
    res.send("Create successfully!")
}
const postUpdatePost = async (req, res) => {
    let data = req.body;
    await UpdatePost(data)
    // console.log(data)
    // res.redirect('/API/Post')
    res.send("Update successfully!")
}
//Delete
const postDeletePost = async (req, res) => {
    let id = req.body.id;
    await DeletePost(id)
    // console.log(id)
    // res.redirect('/API/Post')
    res.send("Delete successfully!")
}

module.exports = {
    postCreateCategory, getReadCategory, postUpdateCategory, postDeleteCategory, getCategories,
    postCreateProduct, getReadProduct, postUpdateProduct, postDeleteProduct, getProducts,
    postCreatePost, getReadPost, postUpdatePost, postDeletePost, getPosts, getPostById1,
    postCreateImage, getReadImage, postUpdateImage, postDeleteImage, getImages,
    postCreateCart, postUpdateCart, postDeleteCart, getCarts, postCreateOrder, postUpdateCartStatus, getOrders, postUpdateOrder, postDeleteOrder, postDeleteCartUser
}