const express = require("express");
const router = express.Router();

// destructure the Controller
const userController = require("../controllers/userControllers");

//-->-->-->-->-->--> ROUTES
router.get("/", userController.fetchUsers);
router.get("/:id", userController.fetchUser);
router.post("/", userController.createUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;

//-->-->-->-->-->--> END USER ROUTES
