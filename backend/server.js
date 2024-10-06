const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//-->-->-->-->-->--> Mongoose
const connectToDb = require("./config/connectToDb");
connectToDb();

//-->-->-->-->-->--> Server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
