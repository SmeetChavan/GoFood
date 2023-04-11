const express = require("express");

const {
  getAllFoodItems,
  getAllFoodCategory,
  checkout,
  myorders,
  // getAFood,
  // postFood,
  // deleteFood,
  // updateFood,
} = require("../controller/foodController");

const {
  createUser,
  getAllUsers,
  authenticateLogin,
} = require('../controller/userController');

const router = express.Router();

router.get("/food" , getAllFoodItems);
router.get("/foodcat" , getAllFoodCategory);
// router.get("/food/:id" , getAFood);
// router.post("/food", postFood);
// router.delete("/food/:id" , deleteFood);
// router.patch("/food/:id" , updateFood);


router.post("/orders" , checkout);
router.post("/myorders" , myorders);


router.post("/register" , createUser);
router.post("/loginuser" , authenticateLogin);
router.get("/users" , getAllUsers);


module.exports = router;