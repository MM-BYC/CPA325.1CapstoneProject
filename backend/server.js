const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//-->-->-->-->-->--> Mongoose
console.log("< package script: npm start >");

const connectToDb = require("./config/connectToDb");
connectToDb();

//-->-->-->-->-->--> Server
app.listen(PORT, () => {
  console.log(
    `server.js ▶️ ▶️ ▶️ ▶️ ▶️ ▶️ ▶️ ▶️ ▶️ ▶️ ▶️ ▶️ Listening on port ${PORT}`
  );
});
