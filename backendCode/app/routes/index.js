// Bring in the express server
const express = require("express");

// Bring in the Express Router
const router = express.Router();

// Import the Controller
const controller = require("../controllers");

// satrt user login and sign up----------------------

// Create a new user
router.post("/create", controller.create);

// login user 
router.post("/login", controller.login);

// end user login and sign up----------------------


//All blogs----------------------
// Create a new blog
router.post("/newblog", controller.blogCreate);

// Get all blogs
router.get("/all", controller.blogFindAll);

// Edit blog using id
router.get("/blogEdit:id", controller.blogFindOne);

// Modify existing blog
router.put("/updateBlog:id", controller.blogUpdate);

// Delete blog by Id
router.delete("/deleteBlog:id", controller.blogDelete);

module.exports = router;