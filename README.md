## Initial Commit  🇺🇸
```
mkdir CPA325.1CapstoneProject
mkdir 
    CPA325.1CapstoneProject/frontend 
    CPA325.1CapstoneProject/backend
cd CPA325.1CapstoneProject
    git init at this level
    git add .
    git commit -m ''
    git remote add origin <repo>
    where <repo> = https://github.com/MM-BYC/CPA325.1CapstoneProject
    git push -u origin main
```
## Backend 
- [x] Create Server 

```
1. cd backend
    ▶️ npm init -y
    ▶️ npm i express mongoose dotenv nodemon   
    
2. create server.js
   ▶️ const express= require('express')
   ▶️ const app = express()
   ▶️ const PORT = process.env.PORT || 3000
   ▶️ app.listen(PORT,()=>{
        console.log(`Listening on port: ${PORT}`)
3. Edit package.json 
   ▶️ "start": "node server.js",
   ▶️ "dev"" "nodemon server.js"
4. create .env
   ▶️ PORT= 
5. Test server is running.
   ▶️ npm start
```
   ![npm start to run the server](npmstart.png)

- [x] Establish Database
```
1. create folder config
    1.1. create file connectToDb
        ▶️ require("dotenv").config()
        ▶️ const mongoose = require('mongoose');
        ▶️ const connectToDb = async() => {
            await mongoose.connect(process.env.DB_URL);
            console.log(`DataBase_Connected`)
        }
        ▶️ module.exports = connectToDb
2. edit .env
    ▶️ DB_URL=mongodb+srv://michaelmarquezusa:<password>@cluster0.scklh.mongodb.net/appName=capstoneProject 
3. edit server.js
    ▶️ const connectToDb = require('./config/connectToDb')
    ▶️ connectToDb()
4. create folder models
    4.1 create file user.js        
        ▶️ const mongoose = require("mongoose");
        ▶️ const Schema = mongoose.Schema;
        ▶️ const userSchema = new Schema({
            role: {type: String,enum: ["admin", "user"]},
            name: {type: String, required: true},
            email: {type: String, unique: true},
            password: {type: String, minlength: 6}
        })

    4.2 create file opendate.js
        ▶️ const mongoose = require("mongoose");
        ▶️ const Schema = mongoose.Schema;
        ▶️ const userSchema = new Schema({

            })
        ▶️ const User = mongoose.model("user", userSchema);
        ▶️ module.exports = User;





```