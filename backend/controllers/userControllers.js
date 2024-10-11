/*

userControllers.js

*/

//-->-->--> data model
const User = require("../models/user");

/* 
Place all CRUD functions as {key:value} object cache to userController
Access with chaining methods e.g. userController.fetchUsers 
*/

const userController = {
  // create new open
  createUser: async (req, res) => {
    try {
      const { role, fname, lname, email, password } = req.body;
      const user = await User.create({
        role: role,
        fname: fname,
        lname: lname,
        email: email,
        password: password,
      });
      console.log(`Successful Made Post`);
      res.json({ user: user });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  //================================================ ▶️[CREATE]

  // get ALL open from DB
  fetchUsers: async (req, res) => {
    try {
      const user = await User.find();
      console.log("Currently fetching ALL users");
      res.json({ user: user });
    } catch (error) {
      res.status(400).json(error);
    }
  },

  fetchUser: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findById(userId);
      console.log("Currently fetching specific users");
      res.json({ user: user });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  //================================================ ▶️[READ by Id]

  fetchUserByEmail: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      console.log("Currently fetching user by email");
      console.log(`Input from frontend email, password ${email}, ${password}`);
      if (!user) {
        return res.json({ message: "User not found" });
      }
      res.json({ user: user });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  //================================================ ▶️[READ by email]

  updateUser: async (req, res) => {
    // 1. Get the id off the url
    // 2. Get the Data off the Body
    // 3. Find and update user.
    // 4. Retrieve updatedUser and send it as a response
    const userId = req.params.id;
    //--------------------------------(1)
    const { role, fname, lname, email, password } = req.body;
    //--------------------------------(2)
    const user = await User.findByIdAndUpdate(userId, {
      role: role,
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    });
    //--------------------------------(3)
    const updatedUser = await User.findById(userId);
    res.json({ user: updatedUser });
    //--------------------------------(4)
  },
  //================================================ ▶️[UPDATE]

  deleteUser: async (req, res) => {
    // 1. Get id off url
    // 2. Delete the record
    // 3. Send a Response to confirm deletion
    const userId = req.params.id;
    //--------------------------------(1)
    await User.deleteOne({ _id: userId });
    // MongoDb implements _id instead of id.
    //--------------------------------(2)
    res.json({ success: "Record deleted successfully" });
    //--------------------------------(3)
  },
  //================================================ ▶️[DELETE]
};

module.exports = userController;

//-->-->-->-->-->--> END USER CONTROLLER
