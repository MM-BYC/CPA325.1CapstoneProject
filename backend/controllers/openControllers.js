/*

openControllers.js

*/

//-->-->--> data model
const Open = require("../models/open");

/* 
Place all CRUD functions as {key:value} object cache to openDateController
Accessible via chaining methods e.g. openDateController.getAllOpenDates 
*/

const openController = {
  // create new open
  createOpen: async (req, res) => {
    try {
      const { user, booked, openDate, openTime } = req.body;
      const open = await Open.create({
        user: user,
        booked: booked,
        openDate: openDate,
        openTime: openTime,
      });
      console.log(`Successful Made Post`);
      res.json({ open: open });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  //================================================ ▶️[CREATE]

  // get ALL open from DB
  fetchOpens: async (req, res) => {
    try {
      const open = await Open.find();
      console.log("Currently fetching ALL openDateModel");
      res.json({ open: open });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  fetchOpen: async (req, res) => {
    try {
      const openId = req.params.id;
      const open = await Open.findById(openId);
      res.json({ open: open });
    } catch (error) {
      res.status(400).json(error);
    }
  },
  //================================================ ▶️[READ]

  updateOpen: async (req, res) => {
    // 1. Get the id off the url
    // 2. Get the Data off the Body
    // 3. Find and update open.
    // 4. Retrieve updatedNote and send it as a response
    const openId = req.params.id;
    //--------------------------------(1)
    const { user, booked, openDate, openTime } = req.body;
    //--------------------------------(2)
    const open = Open.findByIdAndUpdate(openId, {
      user: user,
      booked: booked,
      openDate: openDate,
      openTime: openTime,
    });
    //--------------------------------(3)
    const updatedOpen = await Open.findById(openId);
    res.json({ open: updatedOpen });
    //--------------------------------(4)
  },
  //================================================ ▶️[UPDATE]

  deleteOpen: async (req, res) => {
    // 1. Get id off url
    // 2. Delete the record
    // 3. Send a Response to confirm deletion
    const openId = req.params.id;
    //--------------------------------(1)
    await Open.deleteOne({ _id: openId });
    // MongoDb implements _id instead of id.
    //--------------------------------(2)
    res.json({ success: "Record deleted successfully" });
    //--------------------------------(3)
  },
  //================================================ ▶️[DELETE]
};

module.exports = openController;

//-->-->-->-->-->--> END CONTROLLER
