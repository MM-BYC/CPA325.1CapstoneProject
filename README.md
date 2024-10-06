## Initial Commit
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
   * npm init -y
   * npm i express mongoose dotenv nodemon cookie-parser
    
2. create server.js
   * const express= require('express')
   * const app = express()
   * const PORT = process.env.PORT || 3000
   * app.listen(PORT,()=>{
        console.log(`Listening on port: ${PORT}`)
3. Edit package.json 
   * "start": "node server.js",
   * "dev"" "nodemon server.js"
4. create .env
    PORT=
    DB_URL=
    SECRET=
5. Test server is running.
   * npm start
```
   ![npm start to run the server](npmstart.png)

### Establish Database
```
1. create folder config
2. create file connectToDb


```