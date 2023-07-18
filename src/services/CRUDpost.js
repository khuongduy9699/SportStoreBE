const connection = require('../config/database');
const db = require('../models/index');

const getAllPosts = async () => {
    return new Promise(async (resolve, reject) => {
        try {
            let post = await db.Post.findAll({
                // raw: true
            });
            if (post) {
                resolve(post);
            }
        } catch (e) {
            reject(e);
        }
    });
};
const getPostById = async (Id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let post = await db.Post.findOne({ where: { id: Id } });
            if (post) {
                resolve(post);
            }
        } catch (e) {
            reject(e);
        }
    });
};
//Create in CRUD
const CreatePost = async (data) => {
    let name = data.Name;
    let detail = data.Detail;
    let image = data.Image;
    let createdBy = data.createdBy;
    return new Promise(async (resolve, reject) => {
        try {
            await db.Post.create({
                Name: name,
                Detail: detail,
                Image: image,
                createdBy: createdBy,
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
//Update in CRUD
const UpdatePost = async (data) => {
    let name = data.Name;
    let detail = data.Detail;
    let image = data.Image;
    let createdBy = data.createdBy;
    let id = data.id;

    return new Promise(async (resolve, reject) => {
        try {
            let post = await db.Post.findOne({ where: { id: id } });
            if (post) {
                await post.update({
                    Name: name,
                    Detail: detail,
                    Image: image,
                    createdBy: createdBy,
                });
            }
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
//Delete in CRUD
const DeletePost = async (Id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let post = await db.Post.findOne({ where: { id: Id } });
            if (post) {
                await post.destroy();
            }
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
module.exports = {
    CreatePost,
    getPostById,
    UpdatePost,
    DeletePost,
    getAllPosts,
};
