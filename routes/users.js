const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users");

// * GET /users
router.get("/users", usersController.listUsers);

// * GET /users/:id
router.get("/users/:id", usersController.showUser);

// * POST /users
router.post("/users", usersController.createUser);

// * PUT /users/:id
router.put("/users/:id", usersController.updateUser);

// * DELETE /users/:id
router.delete("/users/:id", usersController.deleteUser);

module.exports = router;
