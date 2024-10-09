const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
//temp
const User = require("./models/user");
const Open = require("./models/open");
// temp
console.log("< package script: npm start >");
//-->-->-->-->-->--> Mongoose
const connectToDb = require("./config/connectToDb");
connectToDb();
//
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
// CORS: CrossOriginResourceSharing

//-->-->-->-->-->--> Middleware
/* 
app.use(express.json()); 
  is a crucial middleware function in Express.js that enables the backend to parse incoming requests with JSON payloads.
express.json() - The primary purpose is to:
  Parse incoming request bodies containing JSON data.
  Populate the req.body object with the parsed JSON data.
*/
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));
//---> middleware uses third party package
// ----------------------------------> {Setup}

app.use((req, res, next) => {
  //--->  a req/res needs to be INTERCEPTED and changed.
  console.log("Custom_Middleware_Hit! ");
  next();
});
//---> middleware customized implementation uses arrow function

// ----------------------------------> {Routes}
const openRoutes = require("./routes/openRoutes");
const userRoutes = require("./routes/userRoutes");

// General route available at the root
app.get("/", (req, res) => {
  res.send("server.js: Hello World!");
});

//use routes
// app.post("/users", async (req, res) => {
//   const user = new User(req.body);
//   await user.save();
//   res.send(user);
// });

// app.post("/opens", async (req, res) => {
//   const open = new Open(req.body);
//   await open.save();
//   res.send(open);
// });

app.use("/opens", openRoutes);
app.use("/users", userRoutes);

//-->-->-->-->-->--> Server
app.listen(PORT, () => {
  console.log(
    `server.js ▶️ ▶️ ▶️ ▶️ ▶️ ▶️ ▶️ ▶️ ▶️ ▶️ ▶️ ▶️ LISTENING on port ${PORT}`
  );
});
