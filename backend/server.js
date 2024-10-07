const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//-->-->-->-->-->--> Mongoose
const connectToDb = require("./config/connectToDb");
connectToDb();

//-->-->-->-->-->--> Server
app.listen(PORT, () => {
  console.log("< package script: npm start >");
  console.log(`server.js ▶️ ▶️ ▶️ Listening on port ${PORT}`);
});
